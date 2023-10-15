const express = require('express')
const cors = require('cors')
require('dotenv/config')
const connectDB = require('../config/connectDB')
const postRoutes = require('../router/postRoute')
const imageGenerationRoutes = require('../router/imageGenerationRoute')
const getAllGenerationsRoutes = require('../router/getAllGenerationsRoute')
const PORT = process.env.PORT || 3000
const app = express()


// handling cors policy
app.use(cors())

// body parser
app.use(express.json({limit: '50mb'}))


// router middlewares
app.use('/api/v1', postRoutes)
app.use('/api/v1', imageGenerationRoutes)
app.use('/api/v1', getAllGenerationsRoutes)

app.get('/', (req, res) => {
    res.send('Hello my Dear!')
})

const startServer = async () => {

   try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
   } catch (error) {
    console.log(error);
   }
}

startServer()