
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
  },

  production: {

    client: 'postgresql',
    connection: 'postgres://ifsolquqdfymwl:1feca99589feb4bd8769c858897312fec80ee5c450d02379d2954a9bfcd2229a@ec2-54-221-237-246.compute-1.amazonaws.com:5432/ddam9gk3ikmjvq',
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}