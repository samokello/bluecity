const mongoose=require("mongoose")
const express=require("express")
const dotenv=require("dotenv")
const cartRouter=require("./routes/cart")


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
 app.get("/",(req,res)={
     res,send(world)
 })

 app.use("/api/cart", cartRouter)
