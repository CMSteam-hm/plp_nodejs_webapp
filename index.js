const http = require('http');
const EventEmitter = require('events');
const handleRequest = require('./requestHandler');

const eventEmitter = new EventEmitter();

eventEmitter.on('requestReceived', () => {
    console.log('Request received by server');
});

const server = http.createServer((req, res) => {
    eventEmitter.emit('requestReceived');
    handleRequest(req, res);
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});