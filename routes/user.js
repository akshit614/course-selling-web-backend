const express = require("express")
const {User, Course} = require("../DB")
const userMiddleware = require("../middlewares/user")


const router = express.Router();

router.post('/signup', (req,res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })

    res.status(200).send("User created successfully");

})

router.get('/courses',userMiddleware, async (req,res) => {

    const response = await Course.find({});
    
    res.status(200).json({
        Cources : response
    })

})

router.post('/courses',userMiddleware, async (req,res) => {
    
    const courseId = req.params.courseId;
    const username = req.headers.username;
    
    await User.updateOne({
        username : username
    },{
        "$push" : {
            purchasedCourses : courseId
        }
    })
    
    res.status(200).json({
        msg : "Congratulations Purchase Complete!"
    })

})

router.get('/purchasedCourses',userMiddleware, async (req,res)=> {

    const user = await User.findOne({
        username: req.headers.username
    })

    console.log(user.purchasedCourses);
    const courses = await Course.findOne({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    
    res.status(200).json({
        Courses : courses
    })

})

module.exports = router;
