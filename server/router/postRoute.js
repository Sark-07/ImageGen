const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()

router.post('/posts', postController)

module.exports = router