const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");


// array of questions for user
const questions = [
    {
        message: "What is your Project Title.",
        name: "Title"
    },
    {
        message: "What is Project Description.",
        name: "Description"
    }, 
    {
        message: "What are the neccessary steps for installation.",
        name: "Install"
    }, 
    {
        message: "How will this app be used",
        name: "Use"
    }, 
    {
        message: "What type of license will be used",
        name: "License"
    },
    {
        message: "What types of Contributions were made",
        name: "Contributions"
    }, 
    {
        message: "What is required to make it run Tests",
        name: "Tests"
    }, 
    {
        message: "For questions contact me here",
        name: "Questions"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(function(response) {
    writeToFile("Readme.md", generateMarkdown(response));
});
}

// function call to initialize program
init();
