const mongoose = require('mongoose');

const userScema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        userName: {
            type: String,
            required: true,
            min: 3,
            max: 10
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverPicture: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            max: 50
        },
        friends: {
            type: Array,
            default: []
        },
        bio: String,
        location: String,
        birthday: String,
        website: String,
        subscribe: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userScema);

module.exports = User;