const Replicate = require('replicate')
const urlToBase64 = require('../helpers/urlTob64Json')
// const {Configuration, OpenAIApi} = require('openai')

const imageGenerationController = async (req, res) => {

    const { prompt } = req.body

    try {
        // const configuration = new Configuration({
        //     apiKey: process.env.OPENAI_API_KEY,
        //   });
        // const openai = new OpenAIApi(configuration);
        // const response = await openai.createImage({
        //     prompt: prompt,
        //     n: 2,
        //     size: "256x256",
        //     response_format: 'b64_json'
        // });

        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });


        const input = {
            prompt: prompt,
            refine: 'expert_ensemble_refiner',
            scheduler: 'DDIM',
            num_outputs: 4,
            apply_watermark: true,
            // seed: 59852
        }
        const output = await replicate.run(process.env.MODEL, { input });

        // output.forEach(async (element, index) => {
        //     console.log(element);
        //     console.log(await urlToBase64(element));
        //     output[index] = await urlToBase64(element)
        // });

        console.log(output);
        res.status(201).json({ success: true, output })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = imageGenerationController