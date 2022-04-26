import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import Link from "next/link";
import Nav from "../src/components/Nav";
import CartContext from "../src/CartState";






const Pcontainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  align-items: center;
  gap: 2em;
  background: #fff;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HotHolder = styled.div`
  width: 250px;
  box-shadow: 5px 5px 0.7 darkgrey;
  border: 2px solid darkgrey;
`;
const Image = styled.img`
width:100%;
height:400px
object-fit:cover;
`;

const ProductName = styled.title`
  text-align: center;
  font-size: ;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  justify-content: center;
`;

const Hotbutton = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0.5em;
  cursor: pointer;
  font-size: 1.5rem;
  background: maroon;
  width: 100%;
  color: #fff;
`;




export default function ProductPage() {
  const [cart, setCart] = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const url = "https://immense-peak-73012.herokuapp.com/api/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [url]);

  console.log(cart);

  // return

  return (
    <div>
       <Nav/>

       <Pcontainer>
     
        
     {products.map((item) => (
       <HotHolder>
           <Link href={`/products/${item._id}`}>
               
         {/* <ImageContainer> */}
           <Image src={item.image} />
            </Link>
         {/* </ImageContainer> */}
         <div>
           <h3 className="productname">{item.name}</h3>
         </div>

         <Flex>
           <p>Ksh{item.salesprice}</p>
         </Flex>

         <Hotbutton className="shop-btn" >Shop now</Hotbutton>

        
       </HotHolder>
     ))}

   </Pcontainer>
   



    </div>
  );
}
