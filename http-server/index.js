const http = require('http')

const server = http.createServer((req, res) => {
    console.log("I got a incoming request")
    // db...

    res.writeHead(200, {'content-type': "application/json"})
    res.end("Thanks for visiting my server :)")
})

server.listen(8000, () => {
    console.log(`Http server is up and running on port 8000`)
})