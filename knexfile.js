// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3',
    },
    //necessary when using sqlite3
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  }

};

const knex = require('knex');

const config = require('../knexfile.js');

//select development obj from knex file
const db = knex(config.development);

//export for use in codebase
module.exports = db;
