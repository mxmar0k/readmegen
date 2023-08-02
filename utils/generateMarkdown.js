function renderLicenseBadge(licenses) {
  if (licenses && Array.isArray(licenses)) {
    const licenseBadges = licenses.map((license) => {
      const encodedLicense = encodeURIComponent(license);
      return `![License](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)`;
    });
    return licenseBadges.join("\n");
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(licenses) {
  if (licenses && Array.isArray(licenses)) {
    const licenseSection = licenses.map((license) => {
      return `## License\nThis project is licensed under the ${license} License.`;
    });
    return licenseSection.join("\n");
  }
  return '';
}

function generateMarkdown(data) {
  const licenseBadges = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadges}

## Description
${data.description}

## Table of Contents

[Installation](#installation)
${renderLicenseLink(data.license)}
[Usage](#usage)
[Dependencies](#dependencies)
[Contributing](#contributing)
[Tests](#tests)
[Username](#username)
[Name](#name)
[Email](#email)

## Installation
${data.installation}

${licenseSection}

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
For questions about this project, please contact ${data.name} at ${data.email}. GitHub: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
