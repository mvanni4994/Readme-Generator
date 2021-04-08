// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
    type: "input",
    name: "title",
    message: "Please input the title of your Project:",
},
{
    type: "input",
    name: "description",
    message: "Please input a description of your Project:",
},
{
    type: "input",
    name: "installation",
    message: "Please input any instructions on how to install:",
},
{
    type: "input",
    name: "usage",
    message: "Please input usage information:",
},
{
    type: "input",
    name: "contributions",
    message: "How would you like other devs to contribute to your application?",
},
{
    type: "input",
    name: "testing",
    message: "Please provide instructions on how to use your application:",
},
{
    type: "list",
    name: "license",
    message: "Which license would you like to select for your application?",
    choices: ['MIT', 'Apache','ISC'],
},
{
    type: "input",
    name: "github",
    message: "Please input your github username:",
},
{
    type: "input",
    name: "email",
    message: "Please input your email address:",
},
{
    type: "input",
    name: "repo",
    message: "Please input the link to your repo:",
},
]).then((response) => {
    console.log(response);

    // TODO: Create a function to write README file
fs.writeToFile(README.md, data, (error) => {
    error ? console.error(error) :console.log("success!")
    });
});
