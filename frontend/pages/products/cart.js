import React, {useState} from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Cart=()=>{
    const [Num, setNum]=useState(0);
    const increase=()=>{
        if(Num<5){
            setNum(prevNum=>prevNum +1);
        }
    };

    const decrease=()=>{
        if(Num>1){
            setNum(prevNum=>prevNum -1);
        }
    }


return(
    <div className="increment-product">


<RemoveOutlinedIcon onClick={decrease} className="minus-icon"/>
<p className="number-product">
    {Num}
</p>

<AddOutlinedIcon onClick={increase}  className="add-icon"/>


<div className="fav-product">
<div className="add-btn">
    <button className="add-button">Add to cart</button>
</div>


<div className="add-btn">
    <FavoriteBorderOutlinedIcon />
</div>

<div className="wish-list add-btn" >
    <p>Add to wishlist</p>
   
</div>



</div>
</div>
)


}

export default Cart;
