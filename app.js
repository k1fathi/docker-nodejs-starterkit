const http = require('http');
const os = require('os');

const interfaces = os.networkInterfaces();
let ipAddress = '';

// Iterate through network interfaces to find the IP address
Object.keys(interfaces).forEach((iface) => {
  interfaces[iface].forEach((details) => {
    if (details.family === 'IPv4' && !details.internal) {
      ipAddress = details.address;
    }
  });
});

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, ipAddress, () => {
  console.log(`Server running at http://${ipAddress}:${port}/`);
});
