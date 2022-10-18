const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello AWS World");
});


server.listen(port, () => {
    console.log(`Server live on port ${port}`)
});