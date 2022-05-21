// const data = [{name:"a"}, {name:"B"}]
const fs = require("fs")
// fs.writeFileSync("data.json", JSON.stringify(data))
let data = JSON.parse(fs.readFileSync("data.json"))
console.log(data);