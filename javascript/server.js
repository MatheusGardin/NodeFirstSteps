const http = require('http')

http.createServer((req, res) => {
    req.url === '/' ? res.end('<h1>HomePage</h1>') : res.end('<h1>AnotherPage</h1>')

    return
}).listen(3000, () => console.log(`Server running at http://${'127.0.0.1'}:${3000}/`))