const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/* Register New User */
const register = async (req, res) => {
    try {
        const {
            name,
            userName,
            email,
            password,
            profilePicture,
            coverPicture,
            location,
            birthday,
            website,
            subscribe,
            viewedProfile,
            impressions,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            userName,
            email,
            password: hashedPassword,
            profilePicture,
            coverPicture,
            location,
            birthday,
            website,
            subscribe,
            viewedProfile,
            impressions,
        });
        
        const user = await newUser.save();
        const userCopy = {...user.toObject()}
        delete userCopy.password;
        res.status(200).json({msg: "sucess", user: userCopy});

    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message,
        });
    }
}

/* Login User */
const login = async (req, res) => {

    const refreshTokens = [];

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(400).json({msg :"User does not exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg :"Invalid Creditional"});
        }
        
        const userCopy = {...user.toObject()}
        delete userCopy.password;

        const token = jwt.sign(userCopy, process.env.JWT_TOKEN, { expiresIn: '15m' });
        const refreshToken = jwt.sign(userCopy, process.env.REFRESH_TOKEN);
        refreshTokens.push(refreshToken);

        res.status(200).json({userCopy, token, refreshToken});

    } catch(error) {
        res.status(500).json(error);
    }
}

module.exports = {
    register,
    login
}
