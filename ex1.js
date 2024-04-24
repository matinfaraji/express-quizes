// Q1.Handle a POST request to the route '/submit' with the provided data
const data = { username: 'example', password: 'password' };

//Answer
const express = require("express");

const app = express();


app.use(express.json())

app.post("/submit",(req,res)=>{

    const data=req.body

    console.log("reseve data",data);
    
res.send('data')

})



const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is runing on url :  http://localhost:${PORT}`);
})