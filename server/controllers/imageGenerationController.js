const Replicate = require('replicate')
const {urlToBase64} = require('../helpers/urlTob64Json')
// const {Configuration, OpenAIApi} = require('openai')

const imageGenerationController = async (req, res) => {

    const { search } = req.body

    try {
        // const configuration = new Configuration({
        //     apiKey: process.env.OPENAI_API_KEY,
        //   });
        // const openai = new OpenAIApi(configuration);
        // const response = await openai.createImage({
        //     prompt: search,
        //     n: 2,
        //     size: "256x256",
        //     response_format: 'b64_json'
        // });

        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });


        const input = {
            prompt: search,
            refine: 'expert_ensemble_refiner',
            scheduler: 'DDIM',
            num_outputs: 2,
            apply_watermark: true,
            // seed: 59852
        }
        const output = await replicate.run(process.env.MODEL, { input });

        output.forEach((element, index) => {
            
            output[index] = urlToBase64(element)
        });

        res.status(201).json({ success: true, response: output })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = imageGenerationController