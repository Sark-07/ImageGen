const {Configuration, OpenAIApi} = require('openai')
const imageGenerationController = async (req, res) => {

    try {
        console.log('hii');
        const configuration = new Configuration({
            apiKey: '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',
          });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createImage({
            prompt: "A cute baby sea otter",
            n: 2,
            size: "1024x1024",
            response_format: 'b64_json'
        });

        res.status(201).json({success: true, response})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message})
    }
}

module.exports = imageGenerationController