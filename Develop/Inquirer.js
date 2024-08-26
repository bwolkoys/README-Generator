const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ TitleofProject, Description, TableofContents, Installation, Usage, License, Contributing, Tests, Questions }) =>
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <header class="p-5 mb-4 header bg-light">
      <div class="container">
        <h1 class="display-4">Title: ${TitleofProject}</h1>
        <h1 class="display-4">Description: ${Description}</h1>
        <h1 class="display-4">Table of Contents: ${TableofContents}</h1>
        <h1 class="display-4">Installation Instructions: ${Installation}</h1>
        <h1 class="display-4">Usage Information: ${Usage}</h1>
        <h1 class="display-4">License: ${License}</h1>
        <h1 class="display-4">Contribution Guidelines: ${Contributing}</h1>
        <h1 class="display-4">Test Instructions: ${Tests}</h1>
        <h1 class="display-4">Questions?: ${Questions}</h1>
      </div>
    </header>
  </body>
  </html>`;
  

inquirer
  .prompt([
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
    },
  ]);

  .then((response) =>
    console.log()
  );
