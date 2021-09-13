const init = require('./index');




// switch (teamData) {
//   case 'manager':
//     console.log(manager.name);
//     break;
//   case  'manager.id':
//     console.log(manager.id);
//     break;
//   case  'manager.email':
//     console.log(manager.email);
//     break;
//   case  'manager.office':
//     console.log(manager.office);
//     break; 
//   case 'manager.exit':
//   console.log(manager.exit);
//   break;
//   default: 
//   console.log()
// }





const generateHtml = (teamData) => {
 `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Team-Profile-Generator</title>
  </head>
  <body>
    <header class="my-header">
      <h1 class="header">My Team</h1>
    </header>

    ${generateManagerCard()}
    ${generateEngineerCards()}
    ${generateInternCards()}

    <div class="container my-container">
      <div class="row justify-content-center my-row">
        <div class="col my-col">
          <div class="card">
            <div class="header-card">
              <div class="card-body">
                <h5 class="card-name">${manager.name}</h5>
                <p class="card-job-title">${manager.role}</p>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item Email">
                Email: <span>${manager.email}</span>
              </li>
              <li class="list-group-item Institution">
                ${manger.office} 
              </li>
            </ul>
          </div>
        </div>

        <div class="container my-container">
        <div class="row justify-content-center my-row">
          <div class="col my-col">
            <div class="card">
              <div class="header-card">
                <div class="card-body">
                  <h5 class="card-name">${engineer.name}</h5>
                  <p class="card-job-title">${engineer.role}</p>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item Email">
                  Email: <span>${engineer.email}</span>
                </li>
                <li class="list-group-item Institution">
                  ${engineer.github} 
                </li>
              </ul>
            </div>
          </div>

          <div class="container my-container">
        <div class="row justify-content-center my-row">
          <div class="col my-col">
            <div class="card">
              <div class="header-card">
                <div class="card-body">
                  <h5 class="card-name">${intern.name}</h5>
                  <p class="card-job-title">${intern.role}</p>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item Email">
                  Email: <span>${intern.email}</span>
                </li>
                <li class="list-group-item Institution">
                  ${intern.school} 
                </li>
              </ul>
            </div>
          </div>

    
  </body>
</html>` 

return generateHtml
}

module.exports = generateHtml;