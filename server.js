const express=require('express');
const port=3005
const appServer=express();
const path=require('path')

//router setup, import router
const adminRouting=require('./Router/adminRoute')
const userRouting=require('./Router/userRoute')

//express url encoded
appServer.use(express.urlencoded());

//ejs setup
appServer.set('view engine','ejs')
appServer.set('views','View')

//static files setup
appServer.use(express.static(path.join(__dirname,'Public')))

//after import router, use here
appServer.use(adminRouting)
appServer.use(userRouting)

//port setup
appServer.listen(port,()=>{
    console.log(`server connected on http://127.0.0.1:${port}`);
})