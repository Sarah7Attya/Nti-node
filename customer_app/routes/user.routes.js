const router = require("express").Router()
const userController = require("../app/controller/user.controller")

// routes
router.get("/", userController.home)

router.get('/customer/:id', userController.single)

router.get("/add", userController.add)
router.get('/addLogic', userController.addLogicGet)

router.get("/addPostMethod", userController.addPostMethod)
router.post("/addPostMethod", userController.addPostMethodLogic)

router.get("/customer/del/:id",userController.delCustomer)

router.get("/customer/edit/:id",userController.editCustomer)
router.post("/customer/edit/:id",userController.editCustomerLogic)


module.exports = router