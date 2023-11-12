const express = require("express");
const router = express.Router();
const {signUp, verifyToken, login} = require("../Controller/Login")
router.post("/sign-up",signUp);
router.post("/verify",verifyToken);
router.post("/login",login);
module.exports = router;