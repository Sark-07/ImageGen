const { v2: cloudinary } = require('cloudinary')
const Post = require('../model/posts')
const postController = async (req, res) => {


    try {

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
        const { userName, prompt, images } = req.body
        // const photoUrl = await cloudinary.uploader.upload(photo)
        const postId = String(btoa(images))
        const findPost = Post.findOne({postId: postId})
        console.log(findPost);
        if (!findPost){
            return res.status(200).json({success: false, message: "Generation already in the library."})
        }
        const newPost = await Post.create({
            postId,
            userName,
            prompt,
            images
        })

        res.status(201).json({ success: true, message: 'Generations stored.'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
    


}
module.exports = postController