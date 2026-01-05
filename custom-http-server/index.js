const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
    console.log(`Incoming request at ${Date.now()}`);
    // console.log(req.headers);

    switch(req.url) {
        case '/':
            res.writeHead(200)
            return res.end("Home Page")
        case '/about':
            res.writeHead(200)
            return res.end("About Page")
        case '/contact-us':
            res.writeHead(200)
            return res.end("Contact Page")
        default:
            res.writeHead(404)
            return res.end("404 Not Found !")
    }
})

server.listen(PORT, ()=> console.log(`Server is running on ${PORT}.`))