const mongoose = require('mongoose');

const userScema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            default: "",
            required: false,
        },
        profilePicture: {
            type: String,
            default: "",
            required: false,
        },
        birthday: {
            year: {
                type: Number,
                required: true,
            },
            month: {
                type: Number,
                required: true,
            },
            day: {
                type: Number,
                required: true,
            },
        },
        location: {
            type: String,
            default: "",
            required: false,
        },
        website: {
            type: String,
            default: "",
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userScema);

module.exports = User;