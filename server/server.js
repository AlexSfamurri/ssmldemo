const express = require('express');
const bodyParser = require('body-parser');

const google = require('../googleAssHelpers/helpers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/fulfillment', google);

const port = 81;
app.listen(port, () => {
  console.log(`Demo is listening on port ${process.env.PORT}!`);
  app.keepAliveTimeout = 0;
});
