const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    promt: {
        type: String
    },
    image: {
        type: String
    }
})

const post = mongoose.model('post', schema)
module.exports = post