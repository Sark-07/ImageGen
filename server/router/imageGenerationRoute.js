const express = require('express')
const imageGenerationController = require('../controllers/imageGenerationController')


const router = express.Router()

router.post('/generate', imageGenerationController)

module.exports = router