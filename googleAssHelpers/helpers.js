const {
  dialogflow,
  SimpleResponse
} = require('actions-on-google');
const { greetings, intro, knowledge, whatHappened, nutsBolts} = require('./responses');
const db = require('../database/databasehelpers');
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

app.intent('what happened', conv => {
  let lastWord = conv.body.queryResult.parameters.lastWord
  return db.insertLastWords(lastWord)
  .then(()=>{
    conv.ask(whatHappened);
    conv.ask(`
    <speak> 
      <s>
        But i can show you that i am listening
      </s>
      <s>
        The last word said to invoke this response was
      </s>
      ${lastWord}
      <s>
        So alex
      </s>
      <s>
        whats next on the agenda
      </s>
    </speak>`);
  }).catch(err => {
    console.error(err);
    
  });
});

app.intent('under the hood', conv => {
  console.log('we made it here, under the hood was invoked');
  
  return db.getWords()
    .then(results => {
      console.log(results, ' this is the results array');

      const insert = results.reduce((response, word) => {
        return response + ' ' + word;
      }, '');
      conv.ask(new SimpleResponse({
        text: insert,
        speech: `
        <speak> 
          ${nutsBolts}
          <s>
            these are all the words i have stored in our 
            <say-as interpret-as="characters">
            sql 
            </say-as> database so far
          </s>
          ${insert}
          <break time="100ms" />
          how are we doing on time?
        </speak> `
      }));
    })
    .catch(err => {
      console.error(err);
      
    });
});

app.intent('that is all', conv => {
  conv.close(`
  <speak>
    <s>
      okay
    </s>
    <prosody pitch="+20%">
      any questions?
    </prosody>
  </speak>`)
});

app.intent('Default Fallback Intent', conv => {
  console.log('inside the fallback intent');
  conv.ask('oops');
});

module.exports = app;