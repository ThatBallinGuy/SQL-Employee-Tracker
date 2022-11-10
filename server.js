const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);

function init(){
    console.log("Initalized");
    
    menu();
}
function menu(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: [  "View All Employees",
                            "Add Employee",
                            "Update Employee Role",
                            "View All Roles",
                            "Add Role",
                            "View All Departments",
                            "Add department"
                        ],
                name: 'choice'
            }
        ])
        .then((response) => {
            switch (response.choice) {
                case "View All Employees":
                    viewEmployee();
                    break;
            
                case "Add Employee":
                    addEmployee();
                    break;
            
                case "Update Employee Role":
                    updateEmployee();
                    break;
            
                case "View All Roles":
                    viewRole();
                    break;
            
                case "Add Role":
                    addRole();
                    break;
            
                case "View All Departments":
                    viewDepartment();
                    break;
            
                case "Add department":
                    addDepartment();
                    break;
            
                default:
                    break;
            }
        });
}
function viewEmployee(){
    db.query(`SELECT id AS ID, first_name AS 'First Name', last_name AS 'Last Name', role.title as Title, department.name AS Department, role.salary AS Salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id`, function (err, results) {
        console.log('\n');
        console.table(results);
        menu();
    });
    
}
function addEmployee(){
    var roleArray = [];
    var managerArray = [];
    db.query('SELECT title FROM role', (err, results) => {
        for (i = 0; i < results.length; i++) {
            roleArray.push(results[i].title);
        }});
    db.query(`SELECT CONCAT(first_name, ' ', last_name) AS managerName FROM employee WHERE manager_id is NULL`, (err, results) => {
        for (i = 0; i < results.length; i++) {
            managerArray.push(results[i].managerName);
        }});
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the employee's first name?`,
                name: 'first_name'
            },
            {
                type: 'input',
                message: `What is the employee's last name?`,
                name: 'last_name'
            },
            {
                type: 'list',
                message: `Choose the employee's role`,
                choices: roleArray,
                name: 'role'
            },
            {
                type: 'list',
                message: `Choose the employee's manager`,
                choices: managerArray,
                name: 'manager'
            }
        ])
        .then((response) => {
            var roleId;
            var managerId;
            db.query(`SELECT id FROM role WHERE title = ?`, response.role, function (err, results) {
                roleId = results[0].id;

                
                db.query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?`, response.manager, function (err, results) {
                    managerId = results[0].id;
                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [response.first_name, response.last_name, roleId, managerId], function (err, results) {
                        console.log('\n New employee successfully added');
                        menu();
                    });
                });
            });
            

            
            
        });

}
function updateEmployee(){
    console.log("Employee Updated");
    menu();
}
function viewRole(){
    db.query(`Select title AS Title, department.name AS Department, salary AS Salary FROM role JOIN department ON role.department_id = department.id`, function (err, results) {
        console.log('\n');
            console.table(results);
            menu();
    });
}
function addRole(){
    console.log("Role Added");
    menu();
}
function viewDepartment(){
    db.query(`Select name FROM department`, function (err, results) {
        console.log('\n');
            console.table(results);
            menu();
    });
    
}
function addDepartment(){
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department'
        }
    ]).then(answers => {
        db.query(`INSERT INTO department (name) VALUES (?);`, answers.department, function (err, results) {
                console.log(`New Department successfully created`);
                menu();
        });
    });
}
init();