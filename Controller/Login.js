const mongoose = require("mongoose");
const {SignUpModel} = require("../Model/SignUpModel");
const jwt = require('jsonwebtoken'); 
const key = "hi"
mongoose.connect('mongodb+srv://rahulraj6263707:Pradeep123@studentlms.jr2y1tc.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
const model = mongoose.model("userData",SignUpModel)
const signUp = async (req,resp)=>{
    const obj = {
        name: req.body.name,
        email: req.body.email, 
        DOB: req.body.DOB,
        en_no: req.body.en_no,
        password: req.body.password
    }
    let res = new model(obj);
    res = await res.save();
    const token = jwt.sign(obj,key);
    if(res){
        resp.status(201).send({
            status: true,
            token: token
        });
    }else{
        resp.status(401).send({
            status: false
        })
    }
}

const verifyToken = (req,resp)=>{
    const token = req.headers['authorization'];
    const decode = jwt.verify(token,key);
    if(decode){
        resp.send({status: true})
    }else{
        resp.send({staus: false})
    }
    console.log(decode);
}

const login =async (req,resp)=>{
    const obj = {
        email: req.body.email,
        password: req.body.password
    }
    if(await model.find(obj)){
        const token = jwt.sign(obj,key);
        resp.status(201).send({
            token: token
        })
        //console.log(jwt.verify(token,key));
    }
   
}



module.exports = {signUp,verifyToken,login}