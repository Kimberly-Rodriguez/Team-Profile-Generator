

const allTeamData = [];

const generateHtml = (response) => {
  for (let i = 0; i < response.length; i++) {
   switch (response[i].role) {
     case 'Manager': 
      allTeamData.push(`
   <div class="container my-container">
      <div class="row justify-content-center my-row">
        <div class="col my-col">
          <div class="card">
            <div class="header-card">
              <div class="card-body">
                <h5 class="card-name">${response[i].name}</h5>
                <p class="card-job-title">${response[i].role}</p>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${response[i].id}</li>
              <li class="list-group-item Email">
                Email: <span>${response[i].email}</span>
              </li>
              <li class="list-group-item Institution">
                ${response[i].officeNumber} 
              </li>
            </ul>
          </div>
        </div>
   `);
   break;
    case 'Engineer':
     allTeamData.push(`
    <div class="container my-container">
        <div class="row justify-content-center my-row">
          <div class="col my-col">
            <div class="card">
              <div class="header-card">
                <div class="card-body">
                  <h5 class="card-name">${response[i].name}</h5>
                  <p class="card-job-title">${response[i].role}</p>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${response[i].id}</li>
                <li class="list-group-item Email">
                  Email: <span>${response[i].email}</span>
                </li>
                <li class="list-group-item Institution">
                  ${response[i].github} 
                </li>
              </ul>
            </div>
          </div>
    `);
    break;
    case 'Intern':
    allTeamData.push(`
    <div class="container my-container">
    <div class="row justify-content-center my-row">
      <div class="col my-col">
        <div class="card">
          <div class="header-card">
            <div class="card-body">
              <h5 class="card-name">${response[i].name}</h5>
              <p class="card-job-title">${response[i].role}</p>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${response[i].id}</li>
            <li class="list-group-item Email">
              Email: <span>${response[i].email}</span>
            </li>
            <li class="list-group-item Institution">
              ${response[i].school} 
            </li>
          </ul>
        </div>
      </div>
    `)
    break;
   }
  }
  
const htmlString = `<!DOCTYPE html>
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
    <header class="row justify-content-center my-header ">
      <h1 class="header">My Team</h1>
    </header>

    ${allTeamData.join('')}
  
  </body>
  </html>` 

return htmlString;
}

module.exports = generateHtml;