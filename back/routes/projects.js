const projectRoutes = require('express').Router();
const db = require('../db-config');

projectRoutes.get('/', (req, res) => {
  db.query('SELECT * from project', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

projectRoutes.post('/', (req, res) => {
  const project = {
    team_id: req.body.team_id,
    title: req.body.title,
  };

  db.query('INSERT INTO project (team_id, title) VALUES (?, ?)', [project.team_id, project.title], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...project, id: results.insertId });
    }
  });
});

projectRoutes.delete('/:id', (req, res) => {
  const projectId = req.params.id;
  db.query(
    'DELETE FROM project WHERE id = ?',
    [projectId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting a project');
      } else {
        res.status(200).send('Project deleted!');
      }
    },
  );
});

module.exports = projectRoutes;
