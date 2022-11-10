const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');



/*const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);
*/
function init(){
    console.log("Initalized");
    
    menu();
}
function menu(){
    console.log("Menu Called");
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
            console.log("Responce gotten");
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
    console.log("Employee Viewed");
    menu();
}
function addEmployee(){
    console.log("Employee Added");
    menu();
}
function updateEmployee(){
    console.log("Employee Updated");
    menu();
}
function viewRole(){
    console.log("Role Viewed");
    menu();
}
function addRole(){
    console.log("Role Added");
    menu();
}
function viewDepartment(){
    console.log("Department Viewed");
    menu();
}
function addDepartment(){
    console.log("Department Added");
    menu();
}
init();