
const router=require("express").Router();
const Cart=require("../models/cart")

router.post("/add", async (req,res)=>{
    const newCart=new Cart({
        name:req.body.name,
        image:req.body.image,    
        price:req.body.price
    });
    console.log(newCart)
    try {
        
        const savedCart=await newCart.save();
        
res.status(201).json(savedCart);

        
    } catch (err) {
        res.status(404).json(err);

    }
  
})

module.exports=router;