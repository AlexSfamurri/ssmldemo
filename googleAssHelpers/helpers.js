const {
  dialogflow,
  SimpleResponse
} = require('actions-on-google');
const responseArray = require('./responses');
const app = dialogflow();

app.intent('Default Welcome Intent', conv => {
  conv.ask('hideho neighbor tim');
});

app.intent('Default Fallback Intent', conv => {
  console.log('inside the fallback intent');
  conv.ask('oops');
});

module.exports = app;