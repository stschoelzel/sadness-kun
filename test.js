const path = require('path');
const name = {id} = module.json;



console.log(path.basename("../test.js"));

console.log(path.dirname("../test.js"));

console.log(path.basename(path.dirname("../test.js")));