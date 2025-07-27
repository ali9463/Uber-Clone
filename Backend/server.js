const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const app = require('./app');
const cors = require('cors');

app.use(cors());
const port =  3000 || process.env.PORT ;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)  });
