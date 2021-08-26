const render = require('./src/pagetemplate.js');
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Output Directory
const OUTPUT_DIR =  path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    new Manager("Hannah", 1, "hannah@hannah.com"),
    new Engineer("Logan", 2, "logan@logan.com"),
    new Intern("Jasper", 3, "jasper@jasper.com"),
];

// Builds HTML file 
fs.writeFileSync(outputPath, render(team), "utf-8");

// TEST: console.log(render(team));