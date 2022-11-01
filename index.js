const inquirer = require('inquirer');
require("console.table")

const mysql = require('mysql2');

const employeeDirectory = ()=>{
    inquirer.prompt([{
        type: 'list',
        name: "choice",
        message: "Would would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Exit"
          ]
    }])
    .then (function(data){
        console.log(data)
    })
}
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Password101103',
    database: 'employees_db'
  },
  employeeDirectory()
);

const viewAllEmployees = ()=>{
    db.query("SELECT * from employee", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

const addEmployee = ()=>{

inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the employee's first name?`,
      name: 'first_name',
    },
    {
      type: 'input',
      message: `What is the employee's last name?`,
      name: 'last_name',
    },
    {
      type: 'input',
      message: `What is their role ID number?`,
      name: 'role_id',
    },
    {
        type: 'input',
        message: `What is their manager ID number?`,
        name: 'manager_id',
    },
])
.then (function({first_name, last_name, role_id, manager_id}){
    db.query("INSERT into employee values (?,?,?,?)",[first_name, last_name, role_id, manager_id], function(err, result){
        if(err) throw err
        console.table(result)
    })
})
}

const viewAllRoles = ()=>{
    db.query("SELECT * from role", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

inquirer
  .prompt([
    {
      type: 'input',
      message: `What?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is their email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is their ID number?`,
      name: 'id',
    },
    {
      type: 'choice',
      message: `What is their office number?`,
      name: 'officeNumber',
    },
])

const viewAllDepartments = ()=>{
    db.query("SELECT * from department", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

inquirer
  .prompt([
    {
      type: 'input',
      message: `What?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is their email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is their ID number?`,
      name: 'id',
    },
    {
      type: 'choice',
      message: `What is their office number?`,
      name: 'officeNumber',
    },
])
