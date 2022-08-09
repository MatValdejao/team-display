const inquirer = require("inquirer")
const fs = require("fs")

const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide a name!")
                    return false
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee id? ",
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide an id!")
                    return false
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email? ",
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide an email!")
                    return false
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? ",
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide an office number!")
                    return false
                }
            }
        }
    ]);
}