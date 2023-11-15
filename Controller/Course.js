const {mongoose} = require("./config");
const {CourseModel} = require("../Model/CourseModel");

const model = mongoose.model("courses",CourseModel);

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



module.exports={
    fetchCourse: fetchCourse,
    sendCourseContent: sendCourseContent
};
