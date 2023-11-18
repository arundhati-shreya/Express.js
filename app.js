const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
    res.setHeader('content-Type','text/html');
    if (req.url === '/home') {
        res.write('<html><head><title>Welcome Home</title></head><body><h1>Welcome home!</h1></body></html>');
    } else if (req.url === '/about') {
        res.write('<html><head><title>About Us</title></head><body><h1>Welcome to About Us page!</h1></body></html>');
    } else if (req.url === '/node') {
        res.write('<html><head><title>Node Js Project</title></head><body><h1>Welcome to my Node Js project!</h1></body></html>');
    } else {
        res.write('<html><head><title>Default Page</title></head><body><h1>Hello from my Node.js Server!</h1></body></html>');
    }

});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});



