const mongoose = require("mongoose")

const SignUpModel = mongoose.Schema({
    name: String,
    email: String, 
    DOB: String,
    en_no: String,
    password: String
})

module.exports.SignUpModel = SignUpModel;