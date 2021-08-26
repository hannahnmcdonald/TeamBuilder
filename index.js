// CONSTANTS: 
const render = require('./src/pagetemplate.js');
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');

const team = [];
const idArray = [];


// Output Directory
const OUTPUT_DIR =  path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// const team = [
//     new Manager("Hannah", 1, "hannah@hannah.com"),
//     new Engineer("Logan", 2, "logan@logan.com"),
//     new Intern("Jasper", 3, "jasper@jasper.com"),
// ];

function writeFile(team) {
    // Builds HTML file 
    fs.writeFileSync(outputPath, render(team), "utf-8");
};

function init() {
    // inquirer:

  
init();

// TEST:
// const team = [
//     new Manager("Hannah", 1, "hannah@hannah.com"),
//     new Engineer("Logan", 2, "logan@logan.com"),
//     new Intern("Jasper the aloe plant", 3, "jasper@jasper.com"),
// ]