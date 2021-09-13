const inquirer = require('inquirer'); //1
const fs = require('fs'); //2 

//independent js document for HTML file
const generateHtml = require('./src/generateHtml.js'); //3 
const Employee = require('./lib/Employee'); //4
const Manager = require('./lib/Manager'); //5
const Engineer = require('./lib/Engineer'); // 6
const Intern = require('./lib/Intern'); // 7


// Empty array that holds all team members: 
const teamData = [];


// manager function
const managerInput = [  // 10
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

const init = () => {  // 9 
  inquirer
   .prompt(managerInput)
   .then((response) => { // also 10 
    const managerData = new Manager (response.name, response.id, response.email, response.officeNumber, response.role) // 11
    //push to my teamData array 
    teamData.push(managerData); // 12 

    return response.role === 'Engineer' ? createNewEngineer() // 13 
         : response.role === 'Intern' ?  createNewIntern()    // 14
         : fs.writeFile('./dist/index.html', generateHtml, (err) => // ~ 15 
         err ? console.log(err) : console.log('Success!'))  // ~ 16 
    
    // if (response.role === 'Engineer') {
    //   createNewEngineer()
    // }
    // else if (response.role === 'Intern') {
    //   createNewIntern()
    // }
    // else {
    //   fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
    //   err ? console.log(err) : console.log('Success!'))
    // }
});
  
}

//engineer function
const createNewEngineer = () => {  // Also 13 
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
      console.log(response)
      const engineerData = new Engineer (response.name, response.id, response.email, response.github, response.role)
    //push to my teamData array 
      teamData.push(engineerData);

     // coditional (ternary operator) chain 
      return response.role === 'Engineer' ? createNewEngineer()
           : response.role === 'Intern' ? createNewIntern()
           : fs.writeFile('./dist/index.html', generateHtml, (err) =>
              err ? console.log(err) : console.log('Success!'))
      
    //   if (response.role === 'Engineer') {
    //     createNewEngineer()
    //   }
    //   else if (response.role === 'Intern') {
    //     createNewIntern()
    //   }
    //   else {
    //     fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
    //     err ? console.log(err) : console.log('Success!'))
    //   }
    });
}

// intern function
createNewIntern = () => { // Also 14 
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
      const internData = new Intern (response.name, response.id, response.email, response.school, response.role)
    //push to my teamData array 
      teamData.push(internData);

      return response.role === 'Engineer' ? createNewEngineer()
           : response.role === 'Intern' ? createNewIntern()
           : fs.writeFile('./dist/index.html', generateHtml, (err) =>
           err ? console.log(err) : console.log('Success!'))
      
      // if (response.role === 'Engineer') {
      //   createNewEngineer()
      // }
      // else if (response.role === 'Intern') {
      //   createNewIntern()
      // }
      // else {
      //   fs.writeFile('./dist/index.html', generateHtml(teamData), (err) =>
      //   err ? console.log(err) : console.log('Success!'))
      // }

    });
  }



// Function call to initialize app
init(); // 8 

module.exports = init; 


// // A function to write HTML file
// function writeToFile(response, data) {
//   fs.writeFile("./dist/index.html", htmlString, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }
