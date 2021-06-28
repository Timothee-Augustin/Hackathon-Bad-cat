const express = require('express');

const serverPort = 8000;
// init the express app
const app = express();
// define the index route
app.get('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});
// listen to incoming requests
app.listen(serverPort, () => console.log('Express server is running'));
