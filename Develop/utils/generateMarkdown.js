// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License) {
    return `![GitHub License](https://img.shields.io/badge/license-${License}-yellowgreen.svg)`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License) {
    return `[License](#license)`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License) {
    return `This project is licensed under the ${data.License}.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.TitleofProject}

![License](https://img.shields.io/badge/License-${data.License}-yellowgreen.svg)

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This project is licensed under the ${data.License}.

## Contribution
${data.Contributing}

## Tests
${data.Tests}

## Questions
If you have any questions, here is my GitHub link and email address:
- GitHub link: (https://github.com/${data.GitHub})
- Email Address: ${data.Email}
`;
}
module.exports = generateMarkdown;
