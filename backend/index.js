const mongoose=require("mongoose");
const express=require("express");
const dotenv=require("dotenv");
// const userRouter = require("./routes/user");
const authRouter =require("./routes/auth");
const userRouter  = require("./routes/user");


const app=express()
const PORT=process.env.PORT || 8000
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB Connected")
})
 .catch((err)=>{
     console.log(err);
 })

 app.listen(PORT, ()=>{
     console.log(`server is running on port ${PORT}`)
 })

 app.use(express.json())

 app.get("/",(req,res)=>{
     res.send()
 })

  app.use("/api/user", userRouter)
  app.use("/api/auth", authRouter)
// app.use("/api/user", userRouter)