const render = require('./src/pagetemplate.js');
const fs = require("fs");
const path = require("path");

// Output Directory
const OUTPUT_DIR =  path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    {
        name: "hannah",
        id: 1,
        email: "hannah@hannah.com",
        role: "manager",
    },
    {
        name: "logan",
        id: 2,
        email: "logan@logan.com",
        role: "engineer",
    },
    {
        name: "jasper",
        id: 3,
        email: "jasper@jasper.com",
        role: "intern",
    },
];

// Builds HTML file 
fs.writeFileSync(outputPath, render(team), "utf-8");

// TEST: console.log(render(team));