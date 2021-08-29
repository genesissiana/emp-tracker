const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kilokilo!',
    database: 'employee_tracker'
});

module.exports = db;