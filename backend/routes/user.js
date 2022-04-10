const router=require("express").Router();
const User=require("../models/user");
router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try {
        const id=req,params,id
        const updates=req.body
        const options={new:true}
        const updatedUser =await User.findByIdAndUpdate(id,updates,options)
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json("err")
    }
})


module.exports=router