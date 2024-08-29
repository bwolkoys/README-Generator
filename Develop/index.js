// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        name: "GitHub",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email addess?",
    }
];

//inquirer.prompt(questions)
//    .then((answers) => {
//        console.log(answers);
//    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File ${fileName} has been created successfully.`);
        }
    });
}

function generateFile (answers) {
    return `
        # ${answers.TitleofProject} 

        ![License](https://img.shields.io/badge/License-${answers.License}-blue.svg)

        ## Description
        ${answers.Description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contribution](#Contribution)
        - [Tests](#Tests)
        - [Questions](#Questions)

        ## Installation
        ${answers.Installation}

        ## Usage
        ${answers.Usage}

        ## License
        This project is licensed under the ${answers.License}.

        ## Contribution
        ${answers.Contributing}

        ## Tests
        ${answers.Tests}

        ## Questions
        If you have any questions, here is my GitHub link and email address:
        - GitHub link: (https://github.com/${answers.GitHub})
        - Email Address:${answers.Email}
    `;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
        //console.log(answers)
        const content = generateFile(answers)
        fs.writeFile("./utils/README.md", content, (error)=> 
        error? console.log(error): console.log("file created"))
    })
}

// Function call to initialize app
init();
