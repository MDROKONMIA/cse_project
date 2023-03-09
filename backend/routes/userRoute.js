const express =require('express')

const router=express.Router();

router.route("/sentEmail/").post((req,res)=>{
    console.log(req.data)
    res.send("i am rokon")
});


module.exports=router;