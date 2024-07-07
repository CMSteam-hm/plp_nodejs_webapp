//requestHandler.js
const handleRequest = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
};

module.exports = handleRequest;