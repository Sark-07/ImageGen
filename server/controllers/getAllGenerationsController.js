const Post = require('../model/posts')

const getAllGenerations = async (req, res) => {

    try {
        const generations = await Post.find({})
        res.status(201).json({success: true, data: generations})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }

}

module.exports = getAllGenerations