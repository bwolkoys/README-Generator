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
        <h1 class="display-4"> # Title: ${TitleofProject}</h1>
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