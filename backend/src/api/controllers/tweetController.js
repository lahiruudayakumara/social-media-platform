import Tweet from'../models/tweetModel';
import User from '../models/userModel';

/* Create */
const createTweet = async (req, res) => {
    try {
        const { userId, description, imgUrl } = req.body;
        const user = await User.findById(userId);
        const newTweet = new Tweet({ 
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            imgUrl ,
            likes: {},
            comments: []
        });
        await newTweet.save();

        const tweet = await Tweet.save();
        res.status(201).json(tweet);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

/* Read */
const getFeedTweets = async (req, res) => {
    try {
        const tweet = await Tweet.find();
        res.status(200).json(tweet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getUserTweets = async (req, res) => {
    try {
        const userId  = req.params.id;
        const tweet = await Tweet.find({ userId });
        res.status(200).json(tweet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

/* Update */
const reactTweet = async (req, res) => {
    try {
        const id  = req.params;
        const userId  = req.body;
        const tweet = await Tweet.find({id});
        const isReacted = tweet.likes.get({userId});

        if (isReacted) {
            tweet.likes.delete(userId);
        } else {
            tweet.likes.set(userId, true);
        }

        const updatedTweet = await Tweet.findByIdAndUpdate(
            id, 
            { likes: tweet.likes }, 
            { new: true }
        );
        
        res.status(200).json(updatedTweet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getTweetStatus = async (req, res) => {
    const _id = req.params._id;
}

module.exports = {
    createTweet,
    getFeedTweets,
    getUserTweets,
    reactTweet
}