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

]).then((response) => {
    console.log(response)
    
    const data = `
# ${response.name}

## Title
${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#testing)
* [Questions](#questions)
* [License](#license)

## Description 
${response.description}

## URL
[Click here to see the live site!](${response.url})
![Screenshot Deployed Website](${response.image})

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributions}

## Testing
${response.testing}

## Questions
Please contact me below with any questions you have about the appiction.
* Github: https://github.com/${response.github}
* Email: ${response.email}

## License
${response.license}`
   
    fs.writeFile('README.md', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
});