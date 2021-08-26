const render = require('./src/pagetemplate.js');
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
console.log(render());