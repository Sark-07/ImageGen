const express = require('express')
const router = express.Router()
const getAllGenerations = require('../controllers/getAllGenerationsController')


router.get('/get-generations', getAllGenerations)


module.exports = router