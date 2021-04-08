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
    type: 'input',
    name:'url',
    message: "Please provide the URL of your deployed application.",
},
{
    type: 'input',
    name:'image',
    message: "Please provide an image link of your deployed application.",
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
    choices: ['MIT', 'Apache','GPL'],
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

    if(response.license === 'MIT'){
        badge = '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if(response.license === 'Apache'){
        badge = '[![Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }else if(response.license === 'GPL'){
        badge = '[![GPL](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
    };
    
    
    const data = `

## ${response.title}

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
[Deployed Site:](${response.url})
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