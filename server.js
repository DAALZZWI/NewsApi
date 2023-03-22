
/* import */
const req = require('express/lib/request')
const http = require('http')

/* create server */
const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 
        'Content-Type': 'text/html; charset=utf-8' 
    })
    res.write('<h1>Hello Node</h1>')
    res.end('<p>Hello Server</p>')
})
server.listen(8080)

/* server status message */
server.on('listening', () => {
    console.log('The server is waiting at 8080 ports')
})
server.on('error', (error) => {
    console.error(error)
})