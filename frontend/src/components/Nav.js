import styled from "styled-components";
import Image from "next/image";
import React, {useState} from "react";
import img1 from "../../public/logo/logo1.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Badge from "@mui/material/Badge";

const Navcontainer = styled.div`
  background-color: gold;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logocontainer = styled.div`
  width: 200px;
  display: flex;
  border: 2px solid gold;
  border-radius: 50%;
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
  width: 30%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 0.5em;
`;

const ShopButton = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0.5em;
  cursor: pointer;
  font-size: 1.5rem;
`;

const LisItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;
`;

const Delivery = styled.div`
  width: 100%;
  height: 40px;
  background: maroon;
  color: gold;
  display: flex;
  justify-content: center;
  padding-top: 0.5em;
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
`;

const Nav = () => {
    const [itemCount, setItemCount] = useState(0);

  return (
    <Navigation>
      <Delivery>
        <LocalShippingIcon />
        <p>Free Delivery in Nairobi for orders above ksh 30,000 /=</p>
      </Delivery>
      <Navcontainer>
        <Logocontainer>
          <Image src={img1} />
        </Logocontainer>

        <Input type="text" placeholder="Search Products" />
        <ShopButton>Shop</ShopButton>

        <Ulcontainer>
          <LisItems>
            <FavoriteIcon />
            <li>
              <a href="#"> Wishlist</a>
            </li>
          </LisItems>

          <LisItems>
            <SwitchAccountIcon />
            <li>
              <a href="#">Account</a>
            </li>
          </LisItems>

          <LisItems>
        
            <Badge badgeContent={itemCount} color="primary">
              <ShoppingCartIcon color="action" />{""}
            </Badge>
            <li>
              <a href="#">Cart</a>
            </li>
          </LisItems>
        </Ulcontainer>
      </Navcontainer>
      
    </Navigation>
  );
};
export default Nav;
