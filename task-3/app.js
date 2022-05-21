// console.log("hello")
//modules => file created , package built-in , npm
// const mod = require('./myMod')
// mod()
// mod.t()
// mod.t2()


// const fs = require('fs')
// fs.mkdir("a", ()=>{console.log("done")})
// fs.writeFileSync("a/data.txt", "hello from node")
//npm init 
// const validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true
// const validator = require("validator")
// const chalk = require("chalk")
// // console.log(chalk.red("hello"))
// const phoneNum = "01934567896"
// isPhone = validator.isMobilePhone(phoneNum, ['ar-EG'])
// isPhone? 
//     console.log(chalk.green("Valid Number")): 
//     console.log(chalk.red("Invalid Number"))

// console.log(__dirname);
// console.log(__filename);

// console.log(process.argv)
// let x = process.argv[2]
// x%2==0 ? console.log('even'): console.log("odd");;

//node app 5 / 3
// [node, app, 5, / , 3]
//  switch(process.argv[3])
//  {
//      case'*': console.log(+(process.argv[2]) * +(process.argv[4]));break;
//      case'/': console.log(+(process.argv[2]) / +(process.argv[4]));break;
//      case'+': console.log(+(process.argv[2]) + +(process.argv[4]));break;
//      case'-': console.log(+(process.argv[2]) - +(process.argv[4]));break;
//      default: console.log('invalid op');
//  }

const yargs = require("yargs")
yargs.command({
    command:"add",
    describe:"ADD NUMBERS",
    builder:{
        name:{
            type:'string',
            demandOption:true,
            describe:"name is required"
        },
        age:{
            type:'number',
            demandOption:true,
            describe:"age is required"
        }
    },
    handler: function(argv){
        // console.log("hello from yargs");
        console.log(argv.name);
    }
})
yargs.argv






