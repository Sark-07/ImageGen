const http = require('https');

export const urlToBase64 = (url) => {
    http.get(url, (resp) => {
        resp.setEncoding('base64');
        let body = '';
        resp.on('data', (data) => { body += data });
        resp.on('end', () => {

            return body;
        })

    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}