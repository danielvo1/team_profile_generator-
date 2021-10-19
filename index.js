const inquirer = require("inquirer");

function init() {
    inquirer.prompt([{
        type: "input",
        name: "manager_name",
        message: "What is the team managers's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the team manager's ID?" 
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?"
    }]).then(function({manager_name, ID, email, office}) {
       nextAction();
    }
    )

function nextAction() {
    inquirer.prompt([{
        type: "list",
        name: "nextAction",
        message: "what action would you like to perform next?",
        choices: [
            "Complete building team",
            "Add Intern",
            "Add Engineer"
        ]
    }]).then(function({nextAction}) {
        if (nextAction === "Add Engineer") {
            return 1;
        } else if (nextAction === "Add Intern") {
            return 2;
        } else {
            return 3;
            //finish the html page
        }
    }
    )
}
}

function createHtml() {
    const file = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>`;
}







init();