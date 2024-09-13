const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.y6ozh.mongodb.net/course_App");


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const adminSchema = new mongoose.Schema({
    username : String,
    password : String
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})


const User = mongoose.model('User', userSchema)
const Admin = mongoose.model('Admin', adminSchema)
const Course = mongoose.model('Course', courseSchema)

module.exports = {User, Admin, Course}
