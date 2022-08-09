const inquirer = require("inquirer")
const fs = require("fs")
// creates array of employee's 
let employeesArr = []

const promptManager = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
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
        },
        {
            type: "confirm",
            name: "confirmMore",
            message: "Would you like to add more team members? "
        }
    ]).then((data) => {
        if (data.confirmMore) {
            employeesArr.push(data)
            promptEmployee(employeesArr)
        }
    });
}

const promptEmployee = (employeesArr) => {

    // enquire about added employee
    inquirer.prompt([
        {
            type: "list", 
            name: "employeeType",
            message: "What is your employee's role? ",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email? ", 
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend? ",
            when: ({ employeeType }) => {
                if (employeeType === "Intern") {
                    return true
                }
            },
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide a school")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is their github account username? ",
            when: ({ employeeType }) => {
                if (employeeType === "Engineer") {
                    return true
                }
            },
            validate: (input) => {
                if (input) {
                    return true
                } else {
                    console.log("Please provide a username")
                    return false
                }
            }
        },
        {
            type: "confirm",
            name: "confirmMore",
            message: "Would you like to add more team members? "
        }
        // rerun prompts if another team member to be added
    ]).then((data) => {
        // add new team member to array 
        employeesArr.push(data)
        console.log(employeesArr)
        if (data.confirmMore) {
            // rerun prompts ensuring that previous members are saved
            return promptEmployee(employeesArr)
        } else {
            // if not more team members, return the team members array
            return employeesArr
        }
    })
}

promptManager()

