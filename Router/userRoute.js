const express=require('express')
const user_router=express.Router()
const user_controller=require('../Controller/userController')


user_router.get('/userproduct',user_controller.getProductDetails)


module.exports=user_router