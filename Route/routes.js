const express = require("express");
const router = express.Router();
const {signUp, verifyToken, login} = require("../Controller/Login");
const { fetchCourse } = require("../Controller/Course");
router.post("/sign-up",signUp);
router.post("/verify",verifyToken);
router.post("/login",login);
router.post("/course",fetchCourse);
module.exports = router;