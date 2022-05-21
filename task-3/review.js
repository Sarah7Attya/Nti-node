// data = [
//     {name:"marwa1", id:1},
//     {name:"marwa2", id:2},
//     {name:"marwa3", id:3},
//     {name:"marwa4", id:4},
// ]

// //localstorage id = 2
// id= 3
// index = data.findIndex(d=> d.id == id)
// console.log(index);
// const update = () => {
//     data[index].name = "hassan"
// }
// update()
// console.log(data)

const x = (a, cb) => {
    if(a) cb("test", "exit", true)
    else cb("exit", "test", false)
}


x(15, (a, b, c)=>{
    
})




