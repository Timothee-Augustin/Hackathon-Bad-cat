const userRoutes = require('express').Router();

const db = require('../db-config');

userRoutes.get('/', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

module.export = userRoutes;
