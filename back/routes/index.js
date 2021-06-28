const routes = require('express').Router();
const userRoutes = require('./users');

routes.post('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

routes.use('/users', userRoutes);

module.exports = routes;
