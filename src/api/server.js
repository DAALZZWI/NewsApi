
/* import */
const req = require('express/lib/request')
const http = require('http')
const fs = require('fs').promises
const path = require('path')
const scrapping = require('../scrapping/scrapping')

/* const */
const port = 8081

/* create server */
const server = http.createServer(async (req, res) => {

    try {

        /* scrapping data */
        const extractResponse = await scrapping.getNews()

        if(req.method === 'GET') {

            if(req.url === '/') {

                /* data */
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.end(JSON.stringify(extractResponse))
            }
        }
    } catch (err) {

        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('Error Exception: ' + err.message)
    }
})

server.listen(port)

/* server status message */
server.on(
    'listening', 
    () => { console.log('The server is waiting at ' + port + ' ports') }
)
server.on(
    'error', 
    (error) => { console.error(error) }
)