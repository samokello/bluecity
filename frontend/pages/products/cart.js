import React, { useState, useContext, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import Nav from "../../src/components/Nav";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import BluecityContext from "../../src/bluecityState";
import Footer from "../../src/components/Footer";
import Link from "next/link";

const Cartcontainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 2em;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const Counter = styled.div`
  width: 100px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid darkgrey;
  background: #fff;
  border-radius: 5px;
`;

const Cart = () => {
  const { cartState, productState } = useContext(BluecityContext);
  const initialValue = 0;
  const [cart, setCart] = cartState;
  const [modifiedCart, setModifiedCart] = useState([]);

  useEffect(() => {
    setModifiedCart([...cart]);
  }, [cart]);

  const handleincrement = (itemId) => {
    const cartItem = modifiedCart.find((item) => item._id == itemId);
    setModifiedCart([...modifiedCart, cartItem]);

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

  };


  


  

  return (
    <div>
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
            <div
              style={{
                display: "flex",
                background: "#EEEEEE",
                alignItems: "center",
                gap: "2em",
                border: "1px solid darkgrey",
                boxShadow: "2px 2px 2px darkgrey",
                width: "80%",
                margin: "0 auto",
                marginBottom: "2em",
              }}
            >
              <Cartcontainer>
                <Img src={item.image} />
              </Cartcontainer>
              <div style={{ padding: "2em" }}>
                <h2 style={{ color: "red" }}>{item.name}</h2>
                <h3>{item.category}</h3>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "2em" }}
                >
                  <div className="remove-icon">
                    <RemoveIcon onClick={() => handleDecrement(item._id)} />
                  </div>

                  <Counter>
                    <p className="count">{counter}</p>
                  </Counter>
                  <div className="plus-icon">
                    <AddIcon onClick={() => handleincrement(item._id)} />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      width: "50%",
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                    <p style={{ fontSize: "1.5rem" }}>delete</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: ".4em",
                      alignItems: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    <h4>Total: </h4>
                    {item.salesprice * counter}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Link href={"/Checkout"}>
        <div
          style={{ padding: ".5em", display: "flex", justifyContent: "end" }}
        >
          <button
            style={{
              padding: "1em",
              background: "maroon",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer ",
            }}
          >
            Checkout
          </button>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default Cart;
