const dealWithJson = require("./dealWithJson")
const chalk = require("chalk")
const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}
const allUsers = () => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    data.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - name: ${user.name}
---------------------------------`))
    })
}
const singleUser = (userId) => {
    const data = dealWithJson.readData()
    if(data(userId).length==0) return console.log(chalk.red("no user yet"));
    data[0].forEach(user=>{
        console.log(chalk.gree(slice(0)))
    })
    

}
const editUser = (userId, newData)=>{
    const data = dealWithJson.writeData()
    data.push(userId,newData)
    console.log(chalk.yellow(`id: ${userId}`))

}
const delUser = (userId)=>{
    const data = dealWithJson.writeData()
    delete(userId)

}
module.exports = {addUser, editUser, allUsers, singleUser, delUser}