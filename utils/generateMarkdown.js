// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Content information

  [Installation](#installation)
  [License](#licence)${renderLicense(data.license)}
  [Usage](#usage)
  [Dependencies](#dependencies)
  [Contributing](#contributing)
  [Tests](#tests)
  [Username](#username)
  [Name](#name)
  [Email](#email)


  ## Installation
  ${data.installation}

  ## Licence
  ${data.license}
  ${renderLicenseSection(data.license)}

  ## Usage
  ${data.usage}

  ## Dependencies
  ${data.dependencies}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Username
  ${data.username}

  ## Name
  ${data.name}

  ## Email
  ${data.email}

  ## Questions
  For questions about this project, please contact ${data.name} at ${data.email}.GitHub: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
