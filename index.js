// packages required to run the program
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// list of questions for the readme
const questions = [
    {   type: "input",
        message: "What is your GitHub username?", 
        name: "gitUser"
    },
    {   type: "input",
        message: "What is your email address?", 
        name: "email"
    },
    {   type: "input",
        message: "What is your project's name?", 
        name: "projectName"
    },
    {   type: "input",
        message: "Please write a short description of your project", 
        name: "description"
    },
    {   type: "input",
        message: "Where can you be contacted for questions?", 
        name: "questions"
    },
    {   type: "list",
        message: "What kind of License should your project have?", 
        choices: ["Apache", "CC", "GPLv3", "ISC", "MIT", "None"],
        name: "license"
    },
    {   type: "input",
        message: "How is your program installed?", 
        name: "installation",
        default: "npm i"
    },
    {   type: "input",
        message: "How is your project used?", 
        name: "usage",
        default: "node index.js"
    },
    {   type: "input",
        message: "What command should be run to install dependencies?", 
        name: "dependencies",
        default: "npm i inquirer@8.2.4"
    },
    {   type: "input",
        message: "What command should be used to run tests?", 
        name: "runTests",
        default: "npm test"
    },
    {   type: "input",
        message: "What does the user need to know about using the repo?",  
        name: "moreInfo"
    },
    {   type: "input",
        message: "Where can they contact you to contribute (email or phone#)", 
        name: "contribution"
    }  
];


// console.log(questions)
function writeToFile(fileName, data, err) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, err)
}


// starts up the questions to be shown then calls them to be written into the readme
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown({...response}), (err) => {
            (err) ? console.log(err) : console.log("")
        });
    });
}

// Function call to initialize app
init();


//! had help from instructional staff