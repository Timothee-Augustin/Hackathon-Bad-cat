const positionRoutes = require('express').Router();
const db = require('../db-config');


positionRoutes.get('/', (req, res) => {
  db.query('SELECT * from position', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

positionRoutes.post('/', (req, res) => {
  const position = {
    name: req.body.name,
    user_id: req.body.user_id,
    team_id: req.body.team_id,
  };

  db.query('INSERT INTO `position`(name, user_id, team_id) VALUES (?, ?, ?)', [position.name, position.user_id, position.team_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...position, id: results.insertId });
    }
  });
});

positionRoutes.delete('/:id', (req, res) => {
    const positionId = req.params.id;
    db.query(
      'DELETE FROM position WHERE id = ?',
      [positionId],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error deleting a position');
        } else {
          res.status(200).send('Position deleted!');
        }
      },
    );
  });

module.exports = positionRoutes;
