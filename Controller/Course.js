const {OpenAI} = require("openai")
const {mongoose} = require("./config");
const {CourseModel,enrolledCouses} = require("../Model/CourseModel");
const jwt = require("jsonwebtoken");
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

const aiHelp = async (req,resp)=>{
    const question = req.body.question;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const response = await openai.completions.create({
      model: "text-curie-001",
      prompt: `${question}\n\n\n\n\n\n`,
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    resp.send(response.choices[0].text);
}




module.exports={
    fetchCourse: fetchCourse,
    sendCourseContent: sendCourseContent,
    getAllEnrolledCourses: getAllEnrolledCourses,
    aiHelp:aiHelp
};
