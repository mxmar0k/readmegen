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
      default: "No Title",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project:",
      default: "No description",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
      default: "No installation instructions needed or provided",
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
      default: "No technologies or language used",
    },
    {
        type: "input",
        name: "Project Dependencies",
        message: "Enter the project dependencies you used:",
        default: "No dependencies used",
      },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
      default: "No contributing for this project",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
      default: "no tests needed"
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your application:",
      choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "None"],
    },
    {
      type: "input",
      name: "name",
      message: "Enter your GitHub username(that's your realname now):",
      default: "No usernaname",
    },
    {
        type: "input",
        name: "name",
        message: "Enter your real real name:",
        default: "No name",
      },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
