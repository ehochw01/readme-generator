const inquirer = require('inquirer');
const fs = require('fs');
const questions = ["Please enter the project title", "Please Enter a Description","Please enter the installation instructions", "Please enter usage instructions", "Please enter license information", "Please give Contribution guidelines", "Please enter instructions on how to test your application", "Enter your github username", "Enter your email address"];


// TODO: Create a function to write README file
function writeToFile(fileName, fileTemplate) {
    fs.writeFile(fileName, fileTemplate, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    let index = 0;
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[index],
                name: 'title'
            },
            {
                type: 'input',
                name: 'description',
                message: questions[++index]
            },
            {
                type: 'input',
                name: 'install',
                message: questions[++index]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[++index]
            },
            // license has to be a list of options
            {
                type: 'list',
                name: 'license',
                message: questions[++index],
                choices: ["MIT", "Apache", "Unlicense", "Open Database License"]
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[++index]
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[++index]
            },
            {
                type: 'input',
                name: 'username',
                message: questions[++index]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[++index]
            }
        ])
        .then((data) => {
            generateFile(data);
        });
}

function generateFile(data) {
    const filename = "./generated/README.md";
    let licenseBadge = "";
    switch (data.license) {
        case "MIT":
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
            break;
        case "Apache":
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
            break;
        case "Unlicense":
            licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
            break;
        case "Open Database License":
            licenseBadge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]';
            break;
    }


    let fileString = 
    `# ${data.title}
${licenseBadge}
    
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License

This application is covered under the ${data.license} license.

## Tests

${data.tests}

## Questions

My github profile can be found at github.com/${data.username}

If you have any questions, feel free to email me at ${data.email}
Thank you!!
`;
    
    writeToFile(filename, fileString);
}

// Function call to initialize app
init();
