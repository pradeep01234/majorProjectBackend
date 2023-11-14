const {mongoose} = require("./config")
const { SignUpModel } = require("../Model/SignUpModel");
const jwt = require('jsonwebtoken');
require("dotenv").config();


const model = mongoose.model("userData", SignUpModel)
const signUp = async (req, resp) => {
    const obj = {
        name: req.body.name,
        email: req.body.email,
        DOB: req.body.DOB,
        en_no: req.body.en_no,
        password: req.body.password
    }
    let res = new model(obj);
    res = await res.save();
    const token = jwt.sign(obj, process.env.KEY);
    if (res) {
        resp.status(201).send({
            status: true,
            token: token
        });
    } else {
        resp.status(401).send({
            status: false
        })
    }
}

const verifyToken = (req, resp) => {
    const token = req.headers['authorization'];
    const decode = jwt.verify(token, process.env.KEY);
    if (decode) {
        resp.send({ status: true })
    } else {
        resp.send({ staus: false })
    }
    console.log(decode);
}

const login = async (req, resp) => {
    const obj = {
        email: req.body.email,
        password: req.body.password
    }
    if (await model.find(obj)) {
        const token = jwt.sign(obj, process.env.KEY);
        resp.setHeader("authorization", token);
        resp.status(201).send({
            token: "please fetch it from header"
        })
    }
}





module.exports = { signUp, verifyToken, login }