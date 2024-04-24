//Q2. Create a route that redirects to '/about'

//Answer
const express = require("express");

const app = express();

app.get("/about",(req,res)=>{

res.send("welcome")

})



const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is runing on url :  http://localhost:${PORT}`);
})