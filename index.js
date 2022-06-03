// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["Please enter the project title", "Please Enter a Description", "Please enter a table of contents", "Please enter the installation instructions", "Please enter usage instructions", "Please enter license information", "Please give Contributing info", "Please enter your tests of the application"];


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
            name: 'title',
            }
        ])
        .then((data) =>
            console.log(data.title)
        );
}

// Function call to initialize app
init();
