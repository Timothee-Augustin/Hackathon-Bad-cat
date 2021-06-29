const teamRoutes = require('express').Router();
const db = require('../db-config');


teamRoutes.get('/', (req, res) => {
  db.query('SELECT * from team', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

teamRoutes.post('/', (req, res) => {
  const team = {
    owner_id: req.body.owner_id,
    name: req.body.name,
  };

  db.query('INSERT INTO team (owner_id, name) VALUES (?, ?)', [team.owner_id, team.name], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...team, id: results.insertId });
    }
  });
});

teamRoutes.delete('/:id', (req, res) => {
    const teamId = req.params.id;
    db.query(
      'DELETE FROM team WHERE id = ?',
      [teamId],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error deleting a team');
        } else {
          res.status(200).send('Team deleted!');
        }
      },
    );
  });

module.exports = teamRoutes;
