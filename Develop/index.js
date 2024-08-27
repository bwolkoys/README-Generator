// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "TitleofProject",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is your project description?",
    },
    {
        type: "input",
        name: "TableofContents",
        message: "Insert table of contents here:",
    },
    {
        type: "input",
        name: "Installation",
        message: "Write installation instructions here:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Write usage information here:",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license",
        choices: ['none', 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Eclipse Public License 1.0', 'GNU AGPL v3', 'GNU GPL v2', 'The MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: "input",
        name: "Contributing",
        message: "Write contribution guidelines here:",
    },
    {
        type: "input",
        name: "Tests",
        message: "Write test instructions here:",
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your Github username? What is your email addess?",
    }
];

inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
