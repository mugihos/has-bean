const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3'),
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
    },
  },

  production: {
    client: 'cockroachdb',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      disableTransactions: true,
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
      disableTransactions: true,
      directory: path.join(__dirname, 'seeds'),
    },
  },
}
