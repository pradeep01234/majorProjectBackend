const mongoose = require("mongoose")

const CourseModel = mongoose.Schema({
    subject: String,
    sub_topic: String,
    topic: String,
    content: String,
    video: String
})

const enrolledCouses = mongoose.Schema({
    email: String,
    courses: Array
})

module.exports = {
    CourseModel: CourseModel,
    enrolledCouses: enrolledCouses
};
