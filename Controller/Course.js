const {mongoose} = require("./config");
const {CourseModel,enrolledCouses} = require("../Model/CourseModel");
const jwt = require("jsonwebtoken");
const { response } = require("express");
require("dotenv").config();

const model = mongoose.model("courses",CourseModel);
const enCourseModel = mongoose.model("getEnrolledCourse",enrolledCouses)

const fetchCourse =async (req,resp)=>{
    const object = {
        subject: req.body.subject,
        sub_topic: req.body.sub_topic, 
        topic: req.body.topic,
        content: req.body.content,
        video: req.body.video
    }
    const repo = new model(object);
    const responce = await repo.save();
    resp.send(responce?"done":"error");
}

const sendCourseContent =async (req,resp)=>{
    resp.send(await model.find({}));
}

const getAllEnrolledCourses = async (req,resp)=>{
    const token = req.headers['authorization'];
    const decode = jwt.verify(token, process.env.KEY);
    const result = await enCourseModel.find({
        email: decode.email
    })
   // console.log(decode);
    if(result){
        resp.send(result);
    }else{
        resp.send(false);
    }
}


module.exports={
    fetchCourse: fetchCourse,
    sendCourseContent: sendCourseContent,
    getAllEnrolledCourses: getAllEnrolledCourses
};
