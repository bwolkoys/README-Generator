const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        message: "Title of Project",
        name: "text",
    },
    {
        type: "input",
        message: "Description",
        name: "text",
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "text",
    },
    {
        type: "input",
        message: "Installation",
        name: "text",
    },
    {
        type: "input",
        message: "Usage",
        name: "text",
    },
    {
        type: "input",
        message: "License",
        name: "text",
    },
    {
        type: "input",
        message: "Contributing",
        name: "text",
    },
    {
        type: "input",
        message: "Tests",
        name: "text",
    },
    {
        type: "input",
        message: "Questions",
        name: "text",
    },
  ]);

  .then((response) =>
    console.log()
  );
