const loginRoute = require('express').Router();
const db = require('../db-config');

loginRoute.post('/', (req, res, next) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  db.query('SELECT * FROM user WHERE firstname = ? AND lastname = ?', [user.firstname, user.lastname], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (results.length === 1) {
      res.status(200).json(results);
    } else {
      res.sendStatus(400);
    }
  });
});

module.exports = loginRoute;
