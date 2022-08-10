// function will filter card info for specific employee type
const filterCardInfo = (employeeArr, i) => {
    // i paramater ensures that we are checking correct employee 
    // function will return info depending on employee type
    if (employeeArr[i].getRole() === "Manager") {
        return `Office Number: ${employeeArr[i].officeNumber}`
    } else if (employeeArr[i].getRole() === "Engineer") {
        return `GitHub: ${employeeArr[i].getGithub()}`
    } else {
        return `School: ${employeeArr[i].getSchool()}`
    }
}

// function will handle creating all employee cards
const generateEmployeeItems = (employeesArr) => {
    // iterate through object array and create employee card
    let icon = "";

    // ensures manager as an employee type to facilitate in page appending
    for (let i = 0; i < employeesArr.length; i++) {
        if (employeesArr[i].getRole() === "Manager") {
            // sets icon of employeeType
            icon = `<i class="bi bi-cup-hot-fill"></i`
        } else if (employeesArr[i].getRole() === "Intern") {
            icon = 
        } else {
            icon =
        }

        // return html card for employee
        return `
        <div class="col-12 col-lg-3 col-md-4">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${employeesArr[i].getName()}</div>
                <div class="card-body">
                    <h5 class="card-title">${icon}${employeesArr[i].getRole()}</h5>
                    <div class="card-info">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employeesArr[i].getId()}</li>
                            <li class="list-group-item">Email: ${employeesArr[i].getEmail()}</li>
                            <li class="list-group-item">${filterCardInfo(employeesArr, i)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

const generateHTML = (employeesArr) => {
    `<!DOCTYPE html> 
    <html lang="en"> 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
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
module.exports = generateHTML