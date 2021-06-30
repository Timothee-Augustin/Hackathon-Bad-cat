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
    teamname: req.body.teamname,
  };

  db.query('INSERT INTO team (owner_id, teamname) VALUES (?, ?)', [team.owner_id, team.teamname], (err, results) => {
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

teamRoutes.get('/:id', (req, res) => {
  const id = req.params.id
  db.query('SELECT * from team INNER JOIN position ON team.id = position.team_id INNER JOIN user ON position.user_id = user.id WHERE team.id = ?', [id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = teamRoutes;
