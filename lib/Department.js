const db = require('../db/connection.js');
const departmentSelect = `SELECT * FROM departments`;

const departmentPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name?'
    }
];

const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${deptName} to departments`);
    });
});

module.exports = {
    departmentSelect,
    departmentPrompt,
    departmentInsert
};


// const inquirer = require('inquirer');
// require('console.table');

// const viewAll = () => {
//     const sql = `SELECT * FROM departments`;
//     db.query(sql, (err, result) => console.table(result));
// }

// const add = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'deptName',
//             message: 'What is the department name?'
//         }
//     ])
//     .then(deptName => {
//         const sql = `INSERT INTO departments (name) VALUES (?)`;
//         const params = [deptName];
//         db.query(sql, params, (err, res) => {
//             console.log('Added')
//         })
//     })
// }

// module.exports = {
//     viewAll,
//     add
// };