const userRoutes = require('express').Router();
const db = require('../db-config');

userRoutes.get('/', (req, res) => {
  db.query('SELECT * from user', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

userRoutes.post('/', (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  db.query('INSERT INTO user (firstname, lastname) VALUES (?, ?)', [user.firstname, user.lastname], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...user, id: results.insertId });
    }
  });
});

userRoutes.delete('/:id', (req, res) => {
  const userId = req.params.id;
  db.query(
    'DELETE FROM user WHERE id = ?',
    [userId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting a user');
      } else {
        res.status(200).send('User deleted!');
      }
    },
  );
});

module.exports = userRoutes;
