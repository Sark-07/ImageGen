const http = require('https');
// let url = 'https://pbxt.replicate.delivery/u70PtlsvOf1DKqCkaTjkpC5BuaVJkeplGsziahqW8cFuADbRA/out-0.png'
const urlToBase64 = async (url) => {
    http.get(url, (resp) => {
        resp.setEncoding('base64');
        let body = '';
        resp.on('data', (data) => { body += data });
        resp.on('end', () => {
            // console.log(body);
            return body;
        })

    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}
module.exports = urlToBase64