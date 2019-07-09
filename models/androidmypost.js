const mongoose = require('mongoose');


const AndroidPosts = mongoose.model('AndroidPosts', {
    postImage: {
        type: String
    },
    postDescription: {
        type: String
    },
    createdAt: {
        type: String,
    },
    location: {
        type: String
    },
    userId: {
        type: String
    },
    likes: {
        type: String
    },
    comments: {
        type: String
    }
});
module.exports = AndroidPosts