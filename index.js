// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown=require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project:",
      default: "",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project:",
      default: "",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
      default: "",
    },
    {
        type: "checkbox",
        name: "License",
        message: "Select a licence applicable to this project:",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "None"],
      },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information(techonologies or computer language used):",
      default: "",
    },
    {
        type: "input",
        name: "dependencies",
        message: "Enter the project dependencies you used:",
        default: "",
      },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
      default: "",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
      default: "",
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username(that's your realname now):",
      default: "",
    },
    {
        type: "input",
        name: "name",
        message: "Enter your real real name:",
        default: "",
      },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
      default: "",
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err){
            console.error(err);    
        } else {
            console.log(`${fileName} generated succesfully`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        const markdownContent=generateMarkdown(answers);
        writeToFile("README.md", markdownContent)
    })
}

// Function call to initialize app
init();
