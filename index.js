const express = require('express')
const bodyparser = require('body-parser')
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express();
const PORT = 2121;

app.use(bodyparser.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(PORT,function(){
    console.log(`Listning on http://localhost:${PORT}`);
    
})
