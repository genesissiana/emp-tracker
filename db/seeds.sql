INSERT INTO departments (name)
VALUES
('Sales'),
('Marketing'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Lead', 100000, 1),
('Marketing', 120000, 2),
('Marketing Lead', 150000, 2),
('Marketing Director', 190000, 2),
('Accountant', 125000, 3),
('Financial Director', 300000, 3),
('Accountant Lead', 250000, 4),
('Human Resources Employee', 80000, 5),
('Human Resources Director', 100000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Stark', 1, 2),
('Mike', 'Stormborn', 2, null),
('Ashley', 'Baratheon', 3, 4),
('Kevin', 'Thormund', 4, null),
('Malia', 'Snow', 5, 6),
('Sarah', 'Lannister', 6, null),
('Tom', 'Bolton', 7, 8),
('Jackie', 'Tully', 8, null),
('Tyson', 'Greyjoy', 9, 10),
('Rebecca', ' Varys', 10, null);