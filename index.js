const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


function init() {
    inquirer.
        prompt([{
            type: "input",
            name: "manager_name",
            message: "What is the team managers's name?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is the team manager's ID?" 
    },
    {
        type: "input",
        name: "manager_email",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "manager_office",
        message: "What is the team manager's office number?"
    }])
    .then(function({manager_name, manager_id, manager_email, manager_office}) {
        let teamMember = new Manager(manager_name, manager_id, manager_email, manager_office);
        createHtml();
        createCard(teamMember);
    }
    )
}

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
            inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the Engineer's name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is the Engineer's ID?" 
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email address?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your Engineer's github?"
            }
            ])
            .then(function({name, id, email, github}) {
                let teamMember = new Engineer(name, id, email, github);
                createCard(teamMember);
            }
            )
        } else if (nextAction === "Add Intern") {
            inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the Intern's name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is the Intern's ID?" 
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email address?",
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern go to?"
            }])
            .then(function({name, id, email, school}) {
                let teamMember = new Intern(name, id, email, school);
                createCard(teamMember);
            }
            )
        } else {
            finishHtml();
            //finish the html page
        }
    }
    )
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
    </head>
    <body>
    `;

    fs.writeFile("/Users/danielvo/Desktop/team_profile_generator-/dist/index.html", file, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("success");
        }
    }); 
    
}

function createCard(employee) {
    let file;
    if (employee.github) {
        file = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> Employee Name: ${employee.name} </h5>
          <h6 class="card-subtitle mb-2 text-muted"> Employee ID: ${employee.id} </h6>
          <a href = "mailto: ${employee.email}"> Email me at: ${employee.email} </a>
          <a href = "${employee.github}"> Github </a>
        </div>
      </div>` 
    } else if (employee.school) {
        file = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> Employee Name: ${employee.name} </h5>
          <h6 class="card-subtitle mb-2 text-muted"> Employee ID: ${employee.id} </h6>
          <a href = "mailto: ${employee.email}"> Email me at: ${employee.email} </a>
          <p> School: ${employee.school} </p>
        </div>
      </div>` 
    } else {
        file = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> Employee Name: ${employee.name} </h5>
      <h6 class="card-subtitle mb-2 text-muted"> Employee ID: ${employee.id} </h6>
      <a href = "mailto: ${employee.email}"> Email me at: ${employee.email} </a>
      <p> Office Number: ${employee.officeNumber} </p>
    </div>
  </div>` 
    }

    fs.appendFile("/Users/danielvo/Desktop/team_profile_generator-/dist/index.html", file, function(err) {
        if(err) {
            console.log(err);
        } else {
            nextAction();
        }
    })
}


function finishHtml() {
    const file = `</body>
    </html>`;

    fs.appendFile("/Users/danielvo/Desktop/team_profile_generator-/dist/index.html", file, function(err) {
        if(err) {
            console.log(err);
        }
    })
}







init();