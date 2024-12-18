const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
  // Use body-parser middleware
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    try {
      req.body = JSON.parse(body);
    } catch (e) {
      req.body = {};
    }
    console.log(req.body); // Access the parsed request body here
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});