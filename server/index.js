const server = require('./server');

//Calling config function to enable dotenv package. This allows environment variables to be available
require('dotenv').config()

const port = process.env.PORT || 3000;

server.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
