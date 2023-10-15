const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    postId: {
        type: String,
        unique: true
    },
    userName: {
        type: String
    },
    prompt: {
        type: String
    },
    images: {
        type: Array
    }
})

const Post = mongoose.model('posts', schema)
module.exports = Post