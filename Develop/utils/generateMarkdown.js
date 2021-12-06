// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description: ${data.description}

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaboration](#collaboration)
  * [License](#license)
  * [Questions](#questions)

  ## Installation: ${data.installation}

  ## Usage: ${data.usage}

  ## Collaboration: ${data.collab}

  ## License: ${data.licenses}

  ## Questions:
  If any questions, please reach me by email at ${data.email}.
  To view other projects, please visit https://github.com/${data.github}

`;
}

module.exports = generateMarkdown
