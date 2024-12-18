const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: accessing req.body directly
  console.log(req.body);
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});