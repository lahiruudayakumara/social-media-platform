const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        imgUrl: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;