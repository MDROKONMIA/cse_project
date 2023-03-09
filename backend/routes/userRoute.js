const express =require('express');
const { sendEmail } = require('../controller/userController');

const router=express.Router();

router.route("/sentmail").post(sendEmail);


module.exports=router;