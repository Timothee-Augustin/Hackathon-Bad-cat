require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
