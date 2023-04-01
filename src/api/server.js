
/* import */
const req = require('express/lib/request')
const http = require('http')
const fs = require('fs').promises
const path = require('path')
const scrapping = require('../scrapping/scrapping')

/* create server */
const server = http.createServer(async (req, res) => {
    
    try {
        
        if(req.method === 'GET') {

            if(req.url === '/') {

                /* data */
                const extractResponse = await scrapping.getNews()

                if(extractResponse.data.length) {

                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                    res.end(JSON.stringify(extractResponse.data))
                } else {

                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                    res.end(JSON.stringify(extractResponse.message))
                }
            }
        }
    } catch (err) {

        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end("There is an error on the server")
    }
})
server.listen(8081)

/* server status message */
server.on(
    'listening', 
    () => { console.log('The server is waiting at 8081 ports') }
)
server.on(
    'error', 
    (error) => { console.error(error) }
)