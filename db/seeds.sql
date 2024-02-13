use employee_db;

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Painting'),
    ('Contractor'),
    ('Realtor');

INSERT INTO role
(title, salary, department_id)
    VALUES
    ('Marketing VP', 150000, 1),
    ('Lead Painter', 90000, 2),
    ('Head Contractor', 80000, 3),
    ('Lead Realtor', 75000, 4);

INSERT INTO employees
    (first_name, role_id, manager_id)
    VALUES
    ('Sam',  1, NULL),
    ('Han',  2, 1),
    ('Jabba', 3, NULL),
    ('Boba', 4, 2);