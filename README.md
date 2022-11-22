[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Employee Tracker

## Description
This project uses Express.js and fs.js to read and write to files in order to keep notes. The App uses express api calls to get and post the information in a local database as well as fs to read and write that data

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Links](#links)
4. [Screenshots](#screenshots)
5. [License](#license)
6. [Questions](#questions)

## Installation
- Clone the repo down to your local machine
- Install modules by using `npm i` in your terminal
- Then youre good to move on to the usage

## Usage
- When installed, type `node server.js` in the terminal
- Navigate to http://localhost:3001
- - Alternatively, you can click on the app link [below](#links)
- Once the app has been launched, you can click any notes in the list to the left to see them
- the plus sign in the top right allows you to add a new note
- When the note is filled out a save icon will appear next to the plus sign

### User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Links

[Dashboard Link](https://github.com/ThatBallinGuy/SQL-Employee-Tracker)

[App Link](https://note-taker.herokuapp.com/)

## Screenshots
![Landing Page png](./public/assets/images/landingPage.png)
![Notes Page png](./public/assets/images/notePage.png)

## License
Licensed under [MIT License](https://opensource.org/licenses/MIT)

## Questions
For any questions, contact me at:
- Github: [ThatBallinGuy](https://github.com/ThatBallinGuy)
- Email: Tballin2000@hotmail.com
  