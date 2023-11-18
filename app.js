const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./Route/routes");
const cors = require("cors");

app.use(cors())
app.use(express.json())
app.use("/",routes);
app.listen(process.env.PORT,()=>{
    console.log("working on port : ",process.env.PORT);
});