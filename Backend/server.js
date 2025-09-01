const dotenv = require('dotenv');
dotenv.config();
const { initializeSocket } = require('./socket');
const http = require('http');
const app = require('./app');

const port =  3000 || process.env.PORT ;
const server = http.createServer(app);
initializeSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)  });
