INSERT INTO departments (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('HR'),
       ('Operations');


INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 120000, 1),
       ('Account Manager', 160000, 6),
       ('Accountant', 125000, 2),
       ('Legal Team Lead', 250000, 3),
       ('Lawyer', 190000, 3),
       ('Sales Lead', 100000, 4),
       ('Salesperson', 80000, 4),
       ('Lead Engineer', 150000, 1),
       ('HR Manager', 80000, 5),
       ('Head of Operations', 95000, 6);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Eileen', 'Dolan', 1, NULL),
       ('Mathew', 'Dolan', 2, NULL),
       ('Russell', 'Dolan', 3, NULL),  
       ('John', 'Smith', 4, NULL);
       