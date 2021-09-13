const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//independent js document for HTML file
const generateHtml = require("./src/generateHtml.js");

// Empty array that holds all team members: 
const teamData= [];

// manager function
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Plase input the name of this manager?",
        name: "name",
      },
      {
        type: "input",
        message: "Please input the id# of this manager:",
        name: "id",
      },
      {
        type: "input",
        message: "Please input the email address of this manager?",
        name: "email",
      },
      {
        type: "input",
        message: "Please input the office number of this manager?",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Do you want to create another team member, if so what kind?",
        choices: ['Engineer', 'Intern', 'Exit'], 
        name: "role",
      },
    ])
    .then((response) => {
        const managerData = new Manager (response.name, response.id, response.email, response.officeNumber)
      //push to my teamData array 
        teamData.push(managerData);
        
        if (response.role === 'Engineer') {
          createNewEngineer()
        }
        else if (response.role === 'Intern') {
          createNewIntern()
        }
        else {
          fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
          err ? console.log(err) : console.log('Success!'))
        
        }
    });
}


//engineer function
function createNewEngineer () {
  inquirer
.prompt([
  {
    type: "input",
    message: " What is the name of this engineer?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the id of this engineer?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of this engineer?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the github of this engineer?",
    name: "github",
  },
  {
    type: "list",
    message: "Do you want to add another team member, if so, which one?",
    choices: ["Engeneer", "Intern", "Exit"],
    name: "role",
  },
])
    .then((response) => {
      const engineerData = new Engineer (response.name, response.id, response.email, response.github)
    //push to my teamData array 
      teamData.push(engineerData);
      
      if (response.role === 'Engineer') {
        createNewEngineer()
      }
      else if (response.role === 'Intern') {
        createNewIntern()
      }
      else {
        fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
        err ? console.log(err) : console.log('Success!'))
      }
    });
}

// intern function
function createNewIntern () {
  inquirer
    .prompt([
      {
        type: "input",
        message: " What is the name of this intern?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the id of this intern?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the email of this intern?",
        name: "email",
      },
      {
        type: "input",
        message: "What school does this intern attend?",
        name: "school",
      },
      {
        type: "list",
        message: "Do you want to add another team member, if so, please select one: ",
        choices: ["Engeneer", "Intern", "Exit"],
        name: "role",
      },
    ])
    .then((response) => {
      const internData = new Intern (response.name, response.id, response.email, response.school)
    //push to my teamData array 
      teamData.push(internData);
      
      if (response.role === 'Engineer') {
        createNewEngineer()
      }
      else if (response.role === 'Intern') {
        createNewIntern()
      }
      else {
        fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
        err ? console.log(err) : console.log('Success!'))
      
      }
    });
  }

// Function call to initialize app
init();

module.exports = init;


// // A function to write HTML file
// function writeToFile(response, data) {
//   fs.writeFile("./dist/index.html", htmlString, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }
