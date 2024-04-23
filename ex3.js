//Create a /who route that passes a name parameter to the app and prints the name parameter to the screen.
// hint: use req.params

//Answer
const express = require("express");

const app = express();

app.use("/r/:anything",(req,res)=>{
   const {anything}=req.params
    res.send(anything)
})



const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is runing on url :  http://localhost:${PORT}`);
})