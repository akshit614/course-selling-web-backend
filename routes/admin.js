
const express = require('express');
const router = express.Router();

const {Admin, Course} = require("../DB")
const adminMiddleware = require("../middlewares/admin")



router.post('/signup', async (req,res)=>{
    
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })

    res.status(200).send("Admin created successfully");

})

router.post('/courses',adminMiddleware, async (req,res)=> {

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.status(200).json({
        msg : "Course created successfully",
        course_id : newCourse._id
    })
    
})

router.get('/courses',adminMiddleware, async (req,res) => {

    const response = await Course.find({});
    
    res.status(200).json({
        Cources : response
    })

})



module.exports = router;


