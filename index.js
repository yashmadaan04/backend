const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
 
 
 
app.get("/",(req,resp)=>{
    resp.send("app is working..")  //http://localhost:5000
}
);


 





const port = process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
});

//db

mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser: true
    
    
})
.then(() => console.log("DB connected"));




 