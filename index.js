/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
 */


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["Please enter the project title", "Please Enter a Description","Please enter the installation instructions", "Please enter usage instructions", "Please enter license information", "Please give Contributing info", "Please enter instructions on how to test your application"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
                choices: ["license 1", "license 2", "license 3"]
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

        ])
        .then((data) => {
            console.log(data);
            generateFile(data);
        });
}

function generateFile(data) {
    console.log("generateFile()");
}

// Function call to initialize app
init();
