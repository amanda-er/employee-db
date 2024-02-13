const mysql = require('mysql');
const { prompt } = require("inquirer");

const index = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    database: "employee_db"
});

index.connect(function (err) {
    if (err) throw err;
});

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

function loadPrompt() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose what you would like to do.",
            choices: [
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },

            ]
        }
    ])
        .then(res => {
            let choice = res.choice;

            switch (choice) {
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;
                case "VIEW_ROLES":
                    viewRoles();
                    break;
                default:
                    quit();
            }
        }
        )
}



