INSERT INTO department (name)
VALUES  ('Development'),
        ('Management'),
        ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES  ('Junior Developer', 60000, 1),
        ('Seinor Developer', 120000, 1),
        ('Project Manager', 90000, 2),
        ('Call Center', 50000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Tristan', 'Ballin', 3, NULL),
        ('Roger', 'Rabbit', 2, 1),
        ('Chistopher', 'Rabbit', 1, 1),
        ('Pooh', 'Bear', 4, 1),
        ('Little', 'Foot', 4, 1);