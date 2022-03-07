const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);
app.use(express.json());

app.use((err, req, res, next) => {
  console.log('Error');
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(3001, () => {
  console.log(`Server up on port 3001`);
});

module.exports = app;
