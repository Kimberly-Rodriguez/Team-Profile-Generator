const inquirer = require('inquirer'); 
const fs = require('fs'); 

//independent js document for HTML file
const generateHtml = require('./src/generateHtml.js'); 
const Employee = require('./lib/Employee'); 
const Manager = require('./lib/Manager'); 
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 


// Empty array that holds all team members: 
const teamData = [];


// manager function
const managerInput = [  
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
    ]

const init = () => {  
  inquirer
   .prompt(managerInput)
   .then((response) => { 
    const managerData = new Manager (response.name, response.id, response.email, response.officeNumber, response.role) 
    //push to my teamData array 
    teamData.push(managerData);

    return response.role === 'Engineer' ? createNewEngineer() 
         : response.role === 'Intern' ?  createNewIntern()    
         : fs.writeFile('./dist/index.html', generateHtml(teamData), (err) => 
         err ? console.log(err) : console.log('Success!'))  
});
  
}

//engineer function
const createNewEngineer = () => { 
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
    message: "Do you want to add another team member, if so, what kind?",
    choices: ["Engeneer", "Intern", "Exit"],
    name: "role",
  },
])
    .then((response) => {
      console.log(response)
      const engineerData = new Engineer (response.name, response.id, response.email, response.github, response.role)
    //push to my teamData array 
      teamData.push(engineerData);

     // coditional (ternary operator) chain 
      return response.role === 'Engineer' ? createNewEngineer()
           : response.role === 'Intern' ? createNewIntern()
           : fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
              err ? console.log(err) : console.log('Success!'))
    });
}

// intern function
createNewIntern = () => { 
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
        message: "Do you want to add another team member, if so, what kind?",
        choices: ["Engeneer", "Intern", "Exit"],
        name: "role",
      },
    ])
    .then((response) => {
      const internData = new Intern (response.name, response.id, response.email, response.school, response.role)
    //push to my teamData array 
      teamData.push(internData);

      return response.role === 'Engineer' ? createNewEngineer()
           : response.role === 'Intern' ? createNewIntern()
           : fs.writeFile('./dist/index.html', generateHtml, (err) =>
           err ? console.log(err) : console.log('Success!'))

    });
  }

// Function call to initialize app
init();

module.exports = init; 


