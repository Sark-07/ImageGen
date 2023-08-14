const Replicate = require('replicate')
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
            num_outputs: 4,
            scheduler: 'DDIM',
            refine: 'expert_ensemble_refiner',
            apply_watermark: true
        }
        const output = await replicate.run(process.env.MODEL, { input });

        res.status(201).json({ success: true, response: output })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = imageGenerationController