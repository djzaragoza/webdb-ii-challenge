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
  },

};


