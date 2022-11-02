INSERT INTO departments (department_name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('HR'),
       ('')


INSERT INTO roles (role_title, role_salary, department_id)
VALUES ('Software Engineer', '', ''),
       ('Account Manager', '', ''),
       ('Accountant', '', ''),
       ('Legal Team Lead', '', ''),
       ('Lawyer', '', ''),
       ('', '', ''),
       ('', '', ''),
       ('', '', ''),
       ('', '', ''),
       ('', '', ''),
       ('', '', '')


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Eileen', 'Dolan', '', ''),
       ('Mathew', 'Dolan', '', ''),
       ('Russell', 'Dolan', '', ''),  
       ('John', 'Smith', '', ''),
       ('', '', '', ''), 
       ('Eileen', 'Dolan', '', ''),
       ('Eileen', 'Dolan', '', '')