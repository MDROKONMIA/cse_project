const express =require('express');
const { sendEmail, getAllNews, getAllTeachers } = require('../controller/userController');

const router=express.Router();

router.route("/sentmail").post(sendEmail);
router.route("/news").get(getAllNews);
router.route("/teachers").get(getAllTeachers)


module.exports=router;