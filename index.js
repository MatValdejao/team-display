const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const inquirer = require("inquirer")

// impors function to contruct HTML page
const recreateObjects = require("./src/page-template")
const writeFile = require("./src/generate-site")
// creates array of employee's 
let employeesArr = []

// prompts managerial role first 
const promptManager = () => {
    // questions
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the managers's name? ", 
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
            message: "What is the manager's id number? ", 
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
            message: "What is the manager's email? ", 
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
        // checks whether to move on with next prompt
        {
            type: "confirm",
            name: "confirmMore",
            message: "Would you like to add more team members? "
        }
        // creates manager object and checks whether more employees to be added
    ]).then((data) => {
        let manager = new Manager(data.name, data.email, data.id, data.officeNumber);
        employeesArr.push(manager);
        if (data.confirmMore) {
            return promptEmployee(employeesArr)
        } else {
            return employeesArr
        }
    });
}

// prompts rest of team members information
const promptEmployee = (employeesArr) => {
    // enquire about added employee
    return inquirer.prompt([
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
        // checks whether to add more team members
        {
            type: "confirm",
            name: "confirmMore",
            message: "Would you like to add more team members? "
        }
        // rerun prompts if another team member to be added
    ]).then((data) => {
        // add new team member object to array 
        if (data.employeeType === "Engineer") {
            let engineer = new Engineer(data.name, data.email, data.id, data.github)
            employeesArr.push(engineer);
        } else {
            let intern = new Intern(data.name, data.email, data.id, data.school)
            employeesArr.push(intern)
        }
        if (data.confirmMore) {
            // rerun prompts ensuring that previous members are saved
            return promptEmployee(employeesArr)
        } else {
            // if not more team members, return the team members array
            return employeesArr
        }
    })
}

// will run application and run through promises to generate HTML page
promptManager().then(() => {
    return recreateObjects(JSON.stringify(employeesArr))
}).then(pageHTML => {
    writeFile(pageHTML)
}).catch(err => {
    console.log(err)
})



