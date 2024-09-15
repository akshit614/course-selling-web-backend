const { Admin } = require("../DB")

async function adminMiddleware(req, res, next){

    const username = req.headers.username; 
    const password = req.headers.password;

    try {   
    const admin = await Admin.findOne({
        username:username,
        password:password
    });
        if (admin) {
            next();
        }
        else{
            res.status(403).json({
                msg :"Admin does'nt exist!"
            });
        } 
    } catch (error) {
        res.status(500).json({
            msg : "Internal server error: " + error.message
        })
    }

}

module.exports = adminMiddleware;