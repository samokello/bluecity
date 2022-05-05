import React, { useState, useContext, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import Nav from "../../src/components/Nav";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import BluecityContext from "../../src/bluecityState";
import Footer from "../../src/components/Footer";

const Cartcontainer = styled.div`
  width: 250px;
  height: 300px;
  margin:2em;
 
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:5px
`;
const Counter = styled.div`
  width: 10%;
  border-radius:5px;
  text-align:center;
  font-size:1rem;
  border:1px solid  darkgrey
`;

const Cart = () => {
  const {cartState, productState} = useContext(BluecityContext)

  const [cart, setCart] = cartState;
  const [modifiedCart, setModifiedCart] = useState([]);

  useEffect(()=>{
    setModifiedCart([...cart])
  },[cart])

  const handleincrement = (itemId) => {
    const cartItem = modifiedCart.find((item) => item._id == itemId);
    setModifiedCart([...modifiedCart, cartItem]);

    console.log(cartItem);
  };

  const handleDecrement = (itemId) => {
    const items = [];
    const cartCopy = [...modifiedCart];
    let itemIndex;
    cartCopy.some((item) => {
      if (item._id === itemId) {
        itemIndex = cartCopy.lastIndexOf(item);
      }
    });

    cartCopy.splice(itemIndex, 1);

    setModifiedCart(cartCopy);

    console.log(itemIndex);
  };

  console.log(modifiedCart)

  return (
    <div >
      <Nav />
      {cart.map((item) => {
        const items = [];
        modifiedCart.find((itemFound) => {
          if (itemFound._id === item._id) {
            items.push(item);
          }
        });
        const counter = items.length;
        
        return (
          <div>



<div style={{display:"flex",background:"#EEEEEE", alignItems:"center", gap:"2em",border:"1px solid darkgrey", boxShadow:"2px 2px 2px darkgrey", width:"80%", margin:"0 auto", marginBottom:"2em"}}>

<Cartcontainer>
              <Img src={item.image} />
            </Cartcontainer>
<div style={{ padding:"2em"}}>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
           


<div style={{display:"flex", alignItems:"center", gap:"2em"}}>
              <div className="remove-icon">
                <RemoveIcon onClick={() => handleDecrement(item._id)} />
              </div>

              <Counter>
                <p className="count">{counter}</p>
              </Counter>
              <div className="plus-icon">
                <AddIcon onClick={() => handleincrement(item._id)} />
              </div>

              <div className="cart-item-price">
                {counter} * {item.salesprice}
              </div>

              <div style={{display:"flex" ,alignItems:"center",gap:".5em",cursor:"pointer"}}>
                <DeleteOutlineOutlinedIcon />
                <p>Delete item</p>
              </div>
            </div>
</div>
<div><h2>Total</h2></div>
</div>

          </div>
        );
      })}

      <Footer/>
    </div>
  );
};

export default Cart;
