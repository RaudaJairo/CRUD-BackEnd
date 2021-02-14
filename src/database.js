const mysql = require('mysql2/promise');

const getConnection = async () => await mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD
});

module.exports = getConnection;
