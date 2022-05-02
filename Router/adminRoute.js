const express=require('express')
const admin_router=express.Router()

const admin_controller=require('../Controller/adminController')

admin_router.get('/',admin_controller.getHome)
admin_router.get('/addProduct',admin_controller.getAddProduct)
admin_router.post('/productData',admin_controller.postProductData)
admin_router.get('/productDetails',admin_controller.getProductDetails)



module.exports=admin_router