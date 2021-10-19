const inquirer = require("inquirer");

function create() {
    inquirer.prompt([{
        type: "input",
        name: "name",
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
        name: "What is the team manager's office number?"
    }])
.then(
    inquirer.prompt([{
        type: "list",
        name: "nextAction",
        message: "Please select your next action.",
        choices: [
            "Would you like to add an intern to your team?",
            "Would you like to add an engineer to your team?",
            "Would you like to finish your team build?"
            ]
        }])
    )
// .then(
//     let new;
//     if (nextAction === "Would you like to add an intern to your team?") {
        
//     }

// )
}