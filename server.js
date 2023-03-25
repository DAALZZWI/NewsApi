
/* import */
const req = require('express/lib/request')
const http = require('http')
const fs = require('fs').promises
const path = require('path')

/* data */
const item = {
    "news" : [
        {"title":"1", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719723.png"},
        {"title":"2", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719936.png"},
        {"title":"3", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719734.png"},
        {"title":"4", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719920.png"},
        {"title":"5", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719912.png"},
        {"title":"6", "image":"https://cdn-icons-png.flaticon.com/512/4719/4719906.png"},
    ]
}

/* create server */
const server = http.createServer((req, res) => {
    
    try{
        
        if(req.method === 'GET') {

            if(req.url === '/') {

                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.end(JSON.stringify(item))
            }
        }
    } catch (err) {

        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end("ERROR")
    }
})
server.listen(8080)

/* server status message */
server.on(
    'listening', 
    () => { console.log('The server is waiting at 8080 ports') }
)
server.on(
    'error', 
    (error) => { console.error(error) }
)
//