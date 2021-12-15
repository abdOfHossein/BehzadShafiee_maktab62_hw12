const express=require('express');
const path = require('path/posix');
const app=express();
const PORT=process.env.PORT || 3000;
const homeRoute=require(path.join(__dirname,"routes","homeRoute.js"));
const contactUsRoute=require(path.join(__dirname,"routes","contactUsRoute.js"));
const abouteUsRoute=require(path.join(__dirname,"routes","aboutUsRoute.js"));

app.use(express.static(path.join(__dirname,"view","pages","css")));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"view","pages"));

app.use('/',homeRoute);
app.use('/',contactUsRoute);
app.use('/',abouteUsRoute);

app.listen(PORT,()=>{

    console.log(`server is running on port:${PORT}`);
})