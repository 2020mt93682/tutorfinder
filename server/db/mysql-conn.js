
const mysql = require('mysql2/promise');

/* export const connection = mysql.createConnection({
  host: 'https://remotemysql.com/',
  user: 'svQtxIxilZ',
  database: 'svQtxIxilZ',
  password : 'Z5uzX9DkGm',
}); */

module.exports = {
  connection : mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'svQtxIxilZ',
    database: 'svQtxIxilZ',
    password : 'Z5uzX9DkGm',
  })
}
