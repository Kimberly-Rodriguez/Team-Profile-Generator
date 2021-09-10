const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/generateMarkdown.js");

// A function to write HTML file
function writeToFile(response) {
 

  fs.writeFile("./dist/index.html", htmlString, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function to initialize app and array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a the role that best describe your job:",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then((response) => {
      // if statements
      // build your team
      // and then do the wrtieToFile
      // writeToFile(response);
    });

  // [{
  //   type: 'input',
  //   message: 'Please note all contributiors to your project(if you are the only contributor please write your name):',

  //   name: 'contributors',

  // },
  // {
  //   type: 'input',
  //   message: 'Please input any test description to your application -- if you dont have any at the moment please write n/a:',
  //   name: 'test',
  // },]
}

// Function call to initialize app
init();
