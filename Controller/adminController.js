const ProductModel=require('../Model/product')  //this one is file name

exports.getHome=(req,res)=>{
    res.render('Admin/index',{
        title:"Home"
    })
}


exports.getAddProduct=(req,res)=>{
    res.render('Admin/add-product',{
        title:"Products"
    })
}

exports.postProductData=(req,res)=>{
    console.log("data:",req.body);
    let title=req.body.title;
    let price=req.body.price;
    let description=req.body.description;
    const formData=new ProductModel(title, price, description)
    formData.saveData();
    res.redirect('/')
}

exports.getProductDetails=(req,res)=>{
    ProductModel.fetchData(Product=>{
        res.render('Admin/view-product',{
                title:"Details",
                data:Product
            })
    })
}