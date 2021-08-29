const db = require('../db/connection.js');

const employeeSelect = `
SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.id
LEFT JOIN roles ON a.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id`;

const employeePrompt = [
    {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: []
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: []
    }
];

const employeeInsert = (({ first, last, role, manager }) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [first, last, role, manager];
    db.query(sql, params, (err, res) => {
        console.log(`Successfully added ${first} ${last} to employees`);
    });
});

module.exports = {
    employeeSelect,
    employeePrompt,
    employeeInsert
};

// const Company = require('./Company.js');

// class Employee {
//     constructor(first_name, last_name, role, department, salary, manager) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.role = role;
//         this.department = department;
//         this.salary = salary;
//         this.manager = manager;
//         this.sql = `
//         SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
//         FROM employees a
//         LEFT JOIN employees b ON a.manager_id = b.id
//         LEFT JOIN roles ON a.role_id = roles.id
//         LEFT JOIN departments ON roles.department_id = departments.id`;
//     }
// };

// module.exports = Employee;

// const db = require('../db/connection');
// const inquirer = require('inquirer');
// require('console.table');

// // managers

// const viewAll = () => {
//     const sql = `
//     SELECT a.first_name, a.last_name, b.first_name b.last_name AS manager
//     FROM employees a
//     LEFT JOIN employees b ON a.manager_id = b.id
//     `;
//     // const sql = `
//     // SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary AS salary, departments.name AS department
//     // FROM employees
//     // LEFT JOIN roles ON employees.role_id = roles.id
//     // LEFT JOIN departments ON roles.department_id = departments.id`;
//     db.query(sql, (err, result) => console.table(result));
// }

// const add = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the employee name?'
//         }
//     ])
// }

// const updateRole = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'newRole',
//             message: 'Which employee would you like to update?',
//             choices: [
//             ]
//         }
//     ])
// }

// module.exports = {
//     viewAll,
//     add,
//     updateRole
// };