// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please enter your project title!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please enter a description for your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please list instructions for installing your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide examples and instructions for use of your project.'            
        },
        {
            type: 'input',
            name: "collab",
            message: 'Please list any collaborators of this project, if any.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please choose a license for your project.',
            choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'Apache License 2.0']
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please enter your github username!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please enter your email address!')
                    return false
                }
            }
        }

    ])
}

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err)
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        })
      })
    })
  }
 
// Function call to initialize app
questions()
    .then(questions => {
        return generateMarkdown(questions)
    })
    .then(fileContent => {
        return writeFile(fileContent)
    })
    .catch(err => {
        console.log(err)
    })
