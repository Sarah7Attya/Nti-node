const dealWithData = require("../helper/dealWithData.helper")
const home = (req,res)=>{
    const data = dealWithData.readFromJSON("database/customer.json")
    res.render("home", {
        pageTitle:"Home Page- customer App",
        hasData: data.length,  //0   
        data
    })
}
const add = (req, res)=>{
    custActions = ["Withdraw ", "deposit"]
    res.render("add", {
        pageTitle:"Add customer - customer App",
        custActions
    })
}
const addPostMethod= (req, res)=>{
    custActions = ["Withdraw", "deposit"]
    res.render("addPost", {
        pageTitle:"Add customer - customer App",
        custActions
    })
}
const addLogicGet = (req,res)=>{
    
    const customer = { id:Date.now(), ...req.query } 
    const data = dealWithData.readFromJSON("database/customer.json")
    data.push(customer)
    dealWithData.writeToJSON(data, "database/customer.json")
    res.redirect("/")
}
const addPostMethodLogic = (req,res)=>{
    const customer = { id:Date.now(), ...req.body } 
    const data = dealWithData.readFromJSON("database/customer.json")
    data.push(customer)
    dealWithData.writeToJSON(data, "database/customer.json")
    res.redirect("/")
}
const single = (req,res)=>{
    
    const customer = dealWithData.readFromJSON("database/customer.json").find(d=> d.id == req.params.id)
    res.render("single",
    { pageTitle:"customer Data", customer}
    )
}
const delCustomer =  (req,res)=>{
    const id = req.params.id
    const data = dealWithData.readFromJSON("database/customer.json")
    const afterDel = data.filter(d=> d.id!=id)
    dealWithData.writeToJSON(afterDel, "database/customer.json")
    res.redirect("/")
}
const editCustomer = (req,res)=>{
    const customer = dealWithData.readFromJSON("database/customer.json").find(d=> d.id == req.params.id)
    res.render("edit",
    { 
        pageTitle:"customer Data", 
        customer,
        custActions:["Withdraw", "deposit"]
    }
    )    
}
const editCustomerLogic = (req,res)=>{
    const data = dealWithData.readFromJSON("database/customer.json")
    const customerIndex = data.findIndex(d=> d.id == req.params.id)
    data[customerIndex] = {...req.body, id:data[customerIndex].id}
    dealWithData.writeToJSON(data, "database/customer.json")
    res.redirect(`/customers/${data[customerIndex].id}`)
}
module.exports = { editCustomer, home, add, single, addLogicGet, delCustomer, addPostMethod, addPostMethodLogic , editCustomerLogic}