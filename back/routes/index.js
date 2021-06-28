const routes = require('express').Router();

routes.post('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

module.exports = routes;
