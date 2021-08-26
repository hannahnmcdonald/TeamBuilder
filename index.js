// CONSTANTS: 
const render = require('./src/pagetemplate.js');
const fs = require("fs");
const path = require("path");
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');

const team = [];
const idArray = [];


// Output Directory
const OUTPUT_DIR =  path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// TEST:
// const team = [
//     new Manager("Hannah", 1, "hannah@hannah.com"),
//     new Engineer("Logan", 2, "logan@logan.com"),
//     new Intern("Jasper the aloe plant", 3, "jasper@jasper.com"),
// ];

function init() {
    // inquirer below. Each inquirer.prompt will prompt the user in the console
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
          {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                // Input MUST be a string
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?",
            validate: answer => {
              const pass = answer.match(
             //   Input must be a number between 1-9, no letters
                /^[1-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a number";
            }
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
            validate: answer => {
              const pass = answer.match(
            //  Input MUST have an "@" and a "." to be a valid email address
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
              const pass = answer.match(
                //   Input must be numbers between 1-9, no letters
                /^[1-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a number(s)";
            }
          }
        ]).then(answers => {
          const manager = new Manager(
              answers.managerName, 
              answers.managerId, 
              answers.managerEmail, 
              answers.managerOfficeNumber
        );
        // Adds manager to team array
          team.push(manager);
        // Adds ID # to ID array
          idArray.push(answers.managerId);
          createTeam();
        });
    };

    function createTeam() {
        // Function builds a team by calling the functions of addEngineer() or addIntern(). If user is finished, it will call writeFile() and HTML file will be generated
        inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
            "Engineer",
            "Intern",
            "I'm done'"
            ]
        }
        ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default:
            writeFile(team);
        }
        });
    };
    function addEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: answer => {
                // Input MUST be a string
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            validate: answer => {
              const pass = answer.match(
            //   Checks to make sure inputed ID is not equal to one already used
                /^[1-9]\d*$/
              );
              if (pass) {
                if (idArray.includes(answer)) {
                  return "This ID is already taken. Please enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "Please enter a positive number greater than zero.";
            }
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
            validate: answer => {
              const pass = answer.match(
            //   Input MUST have an "@" and a "." to be a valid email address
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                // Answer MUST be a string
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          }
        ]).then(answers => {
          const engineer = new Engineer(
            answers.engineerName, 
            answers.engineerId, 
            answers.engineerEmail, 
            answers.engineerGithub
        );
          team.push(engineer);
          idArray.push(answers.engineerId);
          createTeam();
        });
    };

    function addIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                // MUST Be a string
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            validate: answer => {
              const pass = answer.match(
                //   Input MUST be between 1-9 and a number, no letters
                /^[1-9]\d*$/
              );
              if (pass) {
                //   Checks to make sure inputed ID is not equal to one already used
                if (idArray.includes(answer)) {
                  return "This ID is already taken. Please enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "Please enter a number";
            }
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
              const pass = answer.match(
                //   Input MUST have an "@" and a "." to be a valid email address
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?",
            validate: answer => {
                // Answer MUST be a string
              if (answer !== "") {
                return true;
              }
              return "Must have at least one character.";
            }
          }
        ]).then(answers => {
          const intern = new Intern(
              answers.internName, 
              answers.internId, 
              answers.internEmail, 
              answers.internSchool
            );
            // Adds intern to the team array
          team.push(intern);
        //  Adds ID # to the ID array
          idArray.push(answers.internId);
        //   Goes back to the createTeam() function
          createTeam();
        });
    };


    function writeFile(team) {
        // Builds HTML file 
        fs.writeFileSync(outputPath, render(team), "utf-8");
    };

    
    createManager();

};


init();

// TEST:
// const team = [
//     new Manager("Hannah", 1, "hannah@hannah.com"),
//     new Engineer("Logan", 2, "logan@logan.com"),
//     new Intern("Jasper the aloe plant", 3, "jasper@jasper.com"),
// ]