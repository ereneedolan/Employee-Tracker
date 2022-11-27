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
        else if (data.choice === "View All Departments"){
            viewAllDepartments()
        }
        else if (data.choice === "Add Department"){
            addDepartment()
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
    db.query("SELECT * from employees", function(err, result){
        if(err) throw err
        console.table(result)
    employeeDirectory()
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
    db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);",[first_name, last_name, role_id, manager_id], function(err, result){
        if(err) throw err
        console.log("Added New Employee")
        employeeDirectory()
    })
})
}
const updateEmployeeRole = ()=>{
    inquirer
  .prompt([
    {
      type: 'input',
      message: `What is their new role ID number?`,
      name: 'role_id',
    },
    {
        type: 'input',
        message: `What is their employee ID number?`,
        name: 'id',
    },
    
])
.then (function({role_id, id}){
    db.query("UPDATE employees SET role_id = ? WHERE id = ?;",[role_id, id], function(err, result){
        if(err) throw err
        console.log("Updated Employee")
        employeeDirectory()
    })
})

    
}

const viewAllRoles = ()=>{
    db.query("SELECT * from roles", function(err, result){
        if(err) throw err
        console.table(result)
        employeeDirectory()
    })
}

const addRole = ()=>{
inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the role title?`,
      name: 'title',
    },
    {
      type: 'input',
      message: `What is the role salary?`,
      name: 'salary',
    },
    {
      type: 'input',
      message: `What is the role's department id?`,
      name: 'department_id',
    },
])
.then (function({title, salary, department_id}){
    db.query("INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);",[title, salary, department_id], function(err, result){
        if(err) throw err
        console.log("Added New Role")
        employeeDirectory()
        })
    })
 }

const viewAllDepartments = ()=>{
    db.query("SELECT * from departments", function(err, result){
        if(err) throw err
        console.table(result)
        employeeDirectory()
    })
}

const addDepartment = ()=>{
inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the department name?`,
      name: 'name',
    },
])
.then (function({name}){
    db.query("INSERT INTO departments (name) VALUES (?);",[name], function(err, result){
        if(err) throw err
        console.log("Added New Department")
        employeeDirectory()
        })
    })
}
