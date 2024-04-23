//Create a /weird route that passes name and title parameters to the app and prints the name and title parameters to the screen.

//Answer
const express = require("express");

const app = express();

app.use("/search",(req,res)=>{
    const{name , title}=req.query
   console.log(name +"  " + title); 
    res.send(name +"  " + title)
})



const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is runing on url :  http://localhost:${PORT}`);
})