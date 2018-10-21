const {
  dialogflow,
  SimpleResponse
} = require('actions-on-google');
const { greetings, intro, knowledge} = require('./responses');
const app = dialogflow();

app.intent('Default Welcome Intent', conv => {
  conv.ask(greetings);
});

app.intent('intro', conv => {
  conv.ask(new SimpleResponse({
    text: `Let us begin with the dialog flow`,
    speech: intro
  }));
});
app.intent('knowledge', conv => {
  conv.ask(new SimpleResponse({
    text: `this should be an interesting talk`,
    speech: knowledge
  }));
});
app.intent('Default Fallback Intent', conv => {
  console.log('inside the fallback intent');
  conv.ask('oops');
});

module.exports = app;