// require pg-promise
const pgp = require('pg-promise')();
//require the config js to get the libPass


const connection = {
  host: 'pellefant.db.elephantsql.com', // server name or IP address;
  port: 5432,
  database: 'jeunwozz',
  user: 'jeunwozz',
  password: process.env.libPass,
};
const db = pgp(connection);

module.exports = {
  insertLastWords: (lastWord) => db.any(`
  INSERT INTO presentation
  (words_stored)
  VALUES
  ($1)
  `, [lastWord]),
  
  getWords: () => db.any(`
  SELECT words_stored
  FROM presentation
  `)
  .then(resultArr =>{
    return resultArr.map(({ words_stored }) => words_stored);
  })
};