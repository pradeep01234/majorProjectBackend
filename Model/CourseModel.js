const mongoose = require("mongoose")

const CourseModel = mongoose.Schema({
    subject: String,
    sub_topic: String, 
    topic: String,
    content: String,
    video: String
})

module.exports.CourseModel = CourseModel;
