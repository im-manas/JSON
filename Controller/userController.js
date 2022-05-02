const ProductModel=require('../Model/product')



exports.getProductDetails=(req,res)=>{
    ProductModel.fetchData(Product=>{
        res.render('User/products',{
                title:"user products",
                data:Product
            })
    })
}