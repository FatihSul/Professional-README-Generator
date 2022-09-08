// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =- require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user "input"
const questions = inquirer.prompt([
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
        message: "Any common questions?", 
        name: "questions"
    },
    {   type: "list",
        message: "What kind of License should your project have?", 
        choices: ["Apache", "CC", "GPLv3", "GPLv2", "ISC", "MIT", "WTFPL", "None"],
        name: "license"
    },
    {   type: "input",
        message: "How is your program installed?", 
        name: "installation"
    },
    {   type: "input",
        message: "How is your project used?", 
        name: "usage"
    },
    {   type: "input",
        message: "What command should be run to install dependencies?", 
        name: "dependencies",
        default: "npm i inquirer@8.2.4"
    },
    {   type: "input",
        message: "What command should be run to run tests?", 
        name: "runTests"
    },
    {   type: "input",
        message: "What does the user need to know about using the repo?",  
        name: "moreInfo"
    },
    {   type: "input",
        message: "What does the user need to know about contributing to the repo?", 
        name: "contribution"
    }  
])


console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, err);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown({...response}));
    });
}

// Function call to initialize app
init();


//! had help from instructional staff