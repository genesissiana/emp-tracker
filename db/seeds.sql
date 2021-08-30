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
('Sansa', 'Stark', 1, 2),
('Daenerys', 'Targaryen', 2, null),
('Stannis', 'Baratheon', 3, 4),
('Thormund', 'Giantsbane', 4, null),
('Jon', 'Snow', 5, 6),
('Cersei', 'Lannister', 6, null),
('Something', 'Bolton', 7, 8),
('Sam', 'Tully', 8, null),
('Theon', 'Greyjoy', 9, 10),
('Lord', 'Varys', 10, null);