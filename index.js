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
        // if statements where check what user picked and run function that correlates with it
        if(data.choice === "View All Employees"){
            viewAllEmployees()
        }
        else if (data.choice === "Add Employee"){
            addEmployee()
        }
        else if (data.choice === "Update Employee Role"){
            updateEmployeeRole()
        }
        else if (data.choice === "View All Roles"){
            viewAllRoles()
        }
        else if (data.choice === "Add Role"){
            addRole()
        }
        else if (choice === "View All Departments"){
            viewAllDepartments()
        }
        else if (data.choice === "Add Department"){
            addDepartmet()
        }
        else 

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
    db.query("INSERT INTO employee VALUES(?,?,?,?)",[first_name, last_name, role_id, manager_id], function(err, result){
        if(err) throw err
        console.table(result)
    })
})
}
const updateEmployeeRole = ()=>{
    db.query("UPDATE employee SET = ? WHERE id = ?;", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

const viewAllRoles = ()=>{
    db.query("SELECT * from role", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

const addRole = ()=>{
inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the role title?`,
      name: 'role_title',
    },
    {
      type: 'input',
      message: `What is the role salary?`,
      name: 'role_salary',
    },
    {
      type: 'input',
      message: `What is the role's department id?`,
      name: 'department_id',
    },
])
.then (function({role_title, role_salary, department_id}){
    db.query("INSERT INTO role VALUES(?,?,?)",[role_title, role_salary, department_id], function(err, result){
        if(err) throw err
        console.table(result)
        })
    })
 }

const viewAllDepartments = ()=>{
    db.query("SELECT * from department", function(err, result){
        if(err) throw err
        console.table(result)
    })
}

const addDepartment = ()=>{
inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the department name?`,
      name: 'department_name',
    },
])
.then (function({department_name}){
    db.query("INSERT INTO department VALUES(?)",[department_name], function(err, result){
        if(err) throw err
        console.table(result)
        })
    })
}
