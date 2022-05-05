import styled from "styled-components";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import img1 from "../../public/logo/logo1.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Badge from "@mui/material/Badge";
import BluecityContext from "../bluecityState";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const Navcontainer = styled.div`
 
  font-size: 2rem;
  display: flex;
  width:100%;
  justify-content:space-around

`;

const Logocontainer = styled.div`
  width: 200px;
  display: flex;
  border: 2px solid gold;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
`;

const Ulcontainer = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  gap: 2em;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 40%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 0.5em;
  border:1px solid darkgrey
`;

const LisItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;
  justify-content:space-between;
  font-size:1.5rem
`;

const Delivery = styled.div`
  width: 100%;
  
  background: maroon;
  margin-bottom:2em;
  color: gold;
  display: flex;
  justify-content: center;
   gap: 1em;

`;
const Navcategories = styled.div`
  background: maroon;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Categorycontainer = styled.div`
  margin: 2em;
  cursor: pointer;
  color: gold;
`;

const Imagecontainer = styled.div`
  width: 100px;
  height: 100px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Navigation = styled.div`
  margin-bottom: 1em;
  width: 100%;
  top:0;
 
`;

// const handleThemeChange = ()=>{
//   setDarkTheme(!darktheme);
//   if(!darktheme) {
//     setTheme({
//       primaryColor:"#1F1D36",
//       secondaryColor:"#302D4E",
//       text:"#fff"
//     })
//   } else {
//     setTheme({
//       primaryColor:"lightgrey",
//       secondaryColor:"darkgrey",
//       text:"black"
//     })
//   }
// }

const Nav = () => {
  const {cartState, productState} = useContext(BluecityContext)

  const [cart, setCart] = cartState;
  console.log(cart);
  const [isShown, setIsShown]=useState(false)

  useEffect(() => {
    // Perform localStorage action
    const local = localStorage.getItem(cart.length);
    console.log(local);
  }, []);

  return (
    <Navigation>
      
      <Navcontainer>
        <Logocontainer>
          <Link href={"/"}>
            <Image src={img1} />
          </Link>
        </Logocontainer>

        <div style={{width:"30%",display:"flex",alignItems:"center",fontSize:"2rem"}}>

        <Input type="text" placeholder="Search Products" style={{width:"100%",position:"relative"}} />
        <SearchIcon style={{fontSize:"2rem",position:"absolute",right:"45%"}}/>
        </div>
        
          
       <div style={{marginTop:"1em"}}>
       <Link href={"/ProductsPage"}>Shop</Link>

       </div>

        <Ulcontainer>
          <LisItems>
            <FavoriteIcon />
            <li>
              <a href="#"> Wishlist</a>
            </li>
          </LisItems>

          <LisItems onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} style={{position:"relative" ,width:"100%"}}>
           
            <li style={{cursor:"pointer"}}>
             
                <SwitchAccountIcon />
                Account
              {/* <div style={{ display: "none" }} className="accounts"> */}
              {isShown && (
                <div style={{background:"#fff",width:"100%",position:"absolute",zIndex:"100",padding:".5em",borderRadius:"5px",lineHeight:"2em"}} >

                  <Link href={"/SignUp"}>
                  <li >Register</li>
                  </Link>

                  <Link href={"/Login"}>
                  <li >Log in</li>
                  </Link>

                  
                </div>
              )}
            </li>
          </LisItems>

          <LisItems>
           

            <Link href={"/products/cart"}>
              <li style={{ cursor: "pointer" ,width:"100%",display:"flex",alignItems:"center"}} >
                <Badge badgeContent={cart.length} color="primary" >
                  <ShoppingCartIcon color="action" style={{color:"black"}} />
                  {""}
                </Badge>
                 <span>Cart</span> 
              </li>
            </Link>
          </LisItems>
          {/* {
      
 <div onClick={handleThemeChange} style={{cursor:"pointer"}}>
        {
          darktheme?<LightModeIcon style={{color:"yellow"}}/> :<DarkModeIcon style={{backgrounColor:"white"}}/>
        }
</div>
} */}
        </Ulcontainer>
      </Navcontainer>
    </Navigation>
  );
};
export default Nav;
