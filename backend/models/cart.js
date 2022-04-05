const mongoose=require ("mongoose");
const cartSchema=mongoose.Schema({
    image:{type:String,required:true},
    price:{type:Number,required:true},
    name:{type:String,required:true},
    
},
{timestamps:true})

module.exports=mongoose.model("Cart", cartSchema)