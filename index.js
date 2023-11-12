const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./Route/routes");

app.use(express.json())
app.use("/",routes);
app.listen(process.env.PORT,()=>{
    console.log("working on port : ",process.env.PORT);
});