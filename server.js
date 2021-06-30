const { animals } = require('./data/animals');


const express = require('express');
const app = express();

app.get('/api/animals', (req, res) => {
    res.json(animals);
  });

app.listen(3007, () => {
    console.log(`API server now on port 3007!`);
  });