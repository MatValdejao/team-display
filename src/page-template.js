const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern")
const Engineer = require("../lib/Engineer")

// function will filter card info for specific employee type
const filterCardInfo = (employeesArr, i) => {
    let html = ""
    // i paramater ensures that we are checking correct employee 
    // function will return info depending on employee type
    if (employeesArr[i].getRole() === "Manager") {
        html += `Office Number: ${employeesArr[i].officeNumber}`
    } else if (employeesArr[i].getRole() === "Engineer") {
        html += `GitHub: <a href="https://github.com/${employeesArr[i]
				.getGithub()}" target="_blank">${employeesArr[i].getGithub()}</a>`;
    } else {
       html += `School: ${employeesArr[i].getSchool()}`
    }
    return html
}

// will recreate parsed JSON objects
const recreateObjects = (employeesArr) => {
    employeesArr = JSON.parse(employeesArr)
    
    // recreates all objects in array format which is what generateHTML looks for
    for (let i = 0; i < employeesArr.length; i++) {
        
        if (typeof employeesArr[i].officeNumber != "undefined") {
            employeesArr[i] = new Manager(
							employeesArr[i].name,
							employeesArr[i].email,
							employeesArr[i].id,
							employeesArr[i].officeNumber
						);
        } else if (typeof employeesArr[i].github !== "undefined") {
            employeesArr[i] = new Engineer(
							employeesArr[i].name,
							employeesArr[i].email,
							employeesArr[i].id,
							employeesArr[i].github
						);
        } else {
            employeesArr[i] = new Intern(
							employeesArr[i].name,
							employeesArr[i].email,
							employeesArr[i].id,
							employeesArr[i].school
						);
        }
    }
    // runs generateHTML with new object array
    return generateHTML(employeesArr)
}

// function will handle creating all employee cards
const generateEmployeeItems = (employeesArr) => {
    // iterate through object array and create employee card
    let icon = "";
    let html = ""

    // ensures manager as an employee type to facilitate in page appending
    for (let i = 0; i < employeesArr.length; i++) {
        if (employeesArr[i].getRole() === "Manager") {
            // sets icon of employeeType
            icon = `<i class="bi bi-cup-hot-fill"></i>`
        } else if (employeesArr[i].getRole() === "Intern") {
            icon = `<i class="bi bi-search"></i>`
        } else {
            icon = `<i class="bi bi-book-half"></i>`;
        }

        // return html card for employee
        
        html += `<div class="col-12 col-lg-3 col-md-4">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header"><h1>${employeesArr[i].getName()}</h1></div>
                        <div class="card-body">
                            <h5 class="card-title">${icon} ${employeesArr[i].getRole()}</h5>
                            <div class="card-info">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${employeesArr[i]
                                        .getId()}
                                    </li>
                                    <li class="list-group-item">Email: <a href="mailto:
                                        ${employeesArr[i].getEmail()}" target="_blank">${employeesArr[i].getEmail()}</a>
                                    </li>
                                    <li class="list-group-item">
                                        ${filterCardInfo(employeesArr, i)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }

    return html
}

const generateHTML = (employeesArr) => {
    return `<!DOCTYPE html> 
    <html lang="en"> 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../src/style.css">
    </head>

    <body>
        <header>
            <div class="header">
                <h1 class="page-title">
                    My Team
                </h1>
            </div>
        </header>
        <main class="container">
            <div class="row">
                    ${generateEmployeeItems(employeesArr)}
            </div>                       
        </main>
    </body>
    </html>
    `;
};

// exports the function
module.exports = recreateObjects