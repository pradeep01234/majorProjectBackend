const express = require("express");
const router = express.Router();
const {signUp, verifyToken, login} = require("../Controller/Login");
const { fetchCourse, sendCourseContent, getAllEnrolledCourses, aiHelp } = require("../Controller/Course");
router.post("/sign-up",signUp);
router.post("/verify",verifyToken);
router.post("/login",login);
router.post("/course",fetchCourse);
router.get("/course",sendCourseContent);
router.get("/enCourses",getAllEnrolledCourses);
router.post("/aihelp",aiHelp);
module.exports = router;