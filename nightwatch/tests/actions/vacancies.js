const https = require('https')
const makeRequest = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                resolve(JSON.parse(data))
            })
        }).on('error', (e) => {
            reject(e)
        })
    })
}

module.exports = { makeRequest }
