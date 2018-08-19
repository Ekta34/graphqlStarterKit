
let db = require('knex')({
    client: 'pg',
    connection: {
        // host : '',
        // user : '',
        // password : '',
        // database : '',
        // port:
      },
    searchPath: ['public']
});

export default db;