const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml.js");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Empty array tha holds all team members: 
const team = [];


// A function to write HTML file
function writeToFile(response, data) {
  fs.writeFile(filename, generateHtml(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function manager() {
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
    choices: ["Engeneer", "Intern", "none"],
    name: "role",
  },
])
}

//push it to my team array 
team.push(manager);
 

function engineer () {
  inquirer
.prompt([
  {
    type: "input",
    message: " What is the name of this manager?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the id of this manager?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of this manager?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the office number of this manager?",
    name: "office",
  },
  {
    type: "list",
    message: "Do you want to add another team member, if so, which one?",
    choices: ["Engeneer", "Intern", "none"],
    name: "role",
  },
])
}

//push it to my team array 
team.push(engineer);


function intern () {
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
    choices: ["Engeneer", "Intern", "none"],
    name: "role",
  },
])
}

//push it to my team array 
team.push(intern);



function init() { 

    // function to initialize app and array of questions for user input

    // .then((response) => {
    //   let filename = "./dist/index.html"; 
    //   writeToFile(filename, response); 
    // });
}

// Function call to initialize app
init();


module.exports = init