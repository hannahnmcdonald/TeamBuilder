// Generate Team in HTML
const generateTeam = (team) => {
// Generate Manager Card in HTML
    const generateManager = (manager) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fas fa-id-card"></i> ID: ${manager.id}</li>
            <li class="list-group-item"><i class="fas fa-envelope-square"></i> Email" <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item"><i class="far fa-building"></i> Office Number:${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    };
    const generateEngineer = (engineer) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text"><i class="fas fa-glasses mr-2"></i> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fas fa-id-card"></i> ID: ${engineer.id}</li>
            <li class="list-group-item"><i class="fas fa-envelope-square"></i> Email" <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item"><i class="fab fa-github"></i> Github: ${engineer.github} <a href="www.github.com/${engineer.github}" class="card-link"></a></li>
        </ul>
    </div>
    `;
    };
    const generateIntern = (intern) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text"><i class="fas fa-user-graduate mr-2"></i> Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fas fa-id-card"></i> ID: ${intern.id}</li>
            <li class="list-group-item"><i class="fas fa-envelope-square"></i> Email" <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"><i class="fas fa-graduation-cap"></i> School: ${intern.school}</li>
        </ul>
    </div>
    `;
    };
    // Joins array data into ONE string

    const htmlArr =[];

    // TEST:
    // const htmlArr = [generateManager(team[0]), 
    // generateEngineer(team[1]), 
    // generateIntern(team[2])];

    htmlArr
    .push(
        team
            .filter(employee => employee.role ==="manager")
            .map((manager) => generateManager(manager))
            .join("")
    );

    htmlArr
    .push(
        team
            .filter(employee => employee.role ==="engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );

    htmlArr
    .push(
        team
            .filter(employee => employee.role ==="intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );

    return htmlArr.join("");
};

module.exports = (team) => {

    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <!-- Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <!--Font Awesome--> 
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    />
    <!-- Adobe Fonts -->
    <link rel="stylesheet" href="https://use.typekit.net/jmb1xhf.css">
    <!-- CSS-->
    <link href="./style.css" rel="stylesheet" />
</head>
<body>
    
<section class="container" id="main">
    <header class="container-fluid justify-content-center">
        <h1 class="display-4">My Team  <i class="fas fa-users"></i></h1>
    </header>
    <div class="row justify-content-center">

    ${generateTeam(team)}

    </div>
</section>

</body>
</html>
`;
}