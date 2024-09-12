const { User } = require("../DB")


function userMiddleWare(req,res,next){

    const username = req.headers.username; 
    const password = req.headers.password;

    User.findOne({
        username:username,
        password:password
        
    }).then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg : "User doesnt exists"
            })
        } 
    })

}

module.exports = userMiddleWare;