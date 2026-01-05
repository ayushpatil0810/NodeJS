const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const method = req.method
    const path = req.url

    const log = `${Date.now()}: ${method} ${path}\n`
    fs.appendFileSync('log.txt', log, 'utf-8')

    switch (method) {
        case "GET": {
            switch (path) {
                case '/':
                    return res.writeHead(200).end("Hello !")

                case '/contact-us':
                    return res.writeHead(200).end("Contact Details")

                case '/tweet':
                    return res.writeHead(200).end("All tweets are here")
                default:
                    
            }
        }
        break
        case "POST":
            return res.writeHead(201).end("Tweet was created !")
        
    }
    return res.writeHead(404).end("404 Not Found !")



})

server.listen(8000, () => console.log("Server is running on port 8000"))

