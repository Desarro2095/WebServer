const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hola mundo');
    response.end();
});

server.listen(8080);
console.log('listen the port', 8080);