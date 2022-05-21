//npm init --y
// npm i yargs validator chalk@4.0.0
const users = require('./controller/users')
const heads = ["id", "name", "age", "email", "status", "createdAt"]
const yargs = require("yargs");
const { number } = require('yargs');

yargs.command({
    command:"add",
    describe:"add new user data",
    builder:{
        id:{
            type:"number",
            default: Date.now()
        },
        name:{
            type:"string",
            demandOption:true
        },
        email:{
            type:"string",
            demandOption:true
        },
        status:{
            type:"boolean",
            default:false
        },
        age:{
            type:"number",
            demandOption:true
        },
        createdAt:{
            type:"date",
            default:new Date()
        }
    },
    handler: function(argv){
        console.log("add new user");
        let userData = {}
        heads.forEach(h=> userData[h]= argv[h])
        users.addUser(userData)
    }
})
yargs.command({
    command:"showAll",
    describe:"show all users data",
    handler: function(){
        console.log("show all users");
        users.allUsers()
    }
})
yargs.command({
    command:"showUser",
    describe:"show single user data",
    builder:{
        id:{type:number}
    },
    handler: function(argv){
        console.log("show single user");
    }
})
yargs.command({
    command:"delUser",
    describe:"delete single user data",
    builder:{
        id:{}
    },
    handler: function(argv){
        console.log("delete single user");
    }
})
yargs.command({
    command:"editUser",
    describe:"show single user data",
    builder:{
        userId:{},
        id:{},
        name:{},
        email:{},
        status:{},
        age:{}
    },
    handler: function(argv){
        console.log("edit single user");
    }
})
yargs.argv