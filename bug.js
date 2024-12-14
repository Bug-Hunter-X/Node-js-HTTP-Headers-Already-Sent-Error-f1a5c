const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here.  We're setting the header AFTER sending data.
  res.write('Hello World!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});