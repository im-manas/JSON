const fs=require('fs')
const path=require('path')

module.exports=class Product{
    constructor(title, price, description)
    {
        this.title=title;
        this.price=price;
        this.description=description;
    }
    saveData()
    {
        const filelocation=path.join(__dirname,'..','Data','productValue.json')
        fs.readFile(filelocation,(err,fileContent)=>{
            let productData=[]
            if(!err)
            {
                productData=JSON.parse(fileContent)       //Converts a JavaScript Object Notation (JSON) string into an object.
            }
            productData.push(this)     //it fill add current data
            fs.writeFile(filelocation,JSON.stringify(productData),(err)=>{
                console.log("error to write file",err);
            })
        })
    }
    static fetchData(callback)
    {
        const filelocation=path.join(__dirname,'..','Data','productValue.json')
        fs.readFile(filelocation,(err,fileContent)=>{
            if(err)
            {
                callback([])
            }
            else
            {
                callback(JSON.parse(fileContent))
            }
        })
    }
}