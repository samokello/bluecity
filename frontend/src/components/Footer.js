import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import img3 from "../../public/logo/logo1.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footercontainer=styled.div`
width:80%;
margin:0 auto;


`



const ImgCont=styled.div`
width:100px;
height:100px;
cursor: pointer;

`

const PaymentDisplay=styled.div`
display:flex;
align-items:center;
gap:2em;
justify-content:center;

`
const Logocontainer=styled.div`
width:200px;
display:flex;
border:2px solid gold;
border-radius:50%;  
`

const Img = styled.img`
width:100%;
height:100%;
object-fit:contain;

`
const Input=styled.input`
width:30%;
border-radius:5px;
border:darkgrey solid 2px;
outline:none;
font-size:1.5rem;
padding:.5em;
`


const Footer =()=>{
    return(
        <Footercontainer>

<div className="display2">

           <div className="payment-holder">
               <h3 className="footer-h3">Payment Methods</h3>

<PaymentDisplay>
               <ImgCont>
               <Img src="icons/mpesa.png"/>
               </ImgCont>


               <ImgCont>
               <Img src="icons/visa.svg"/>
               </ImgCont>

               <ImgCont>
               <Img src="icons/master-card.svg"/>

               </ImgCont>

               </PaymentDisplay>

               


           </div>




           <div className="payment-holder">
               <h3 className="footer-h3">Delivery Methods</h3>

<PaymentDisplay>
               <ImgCont className="icons-holder">
              <TwoWheelerIcon className="delivery-icons"/>
               </ImgCont>


               <ImgCont className="icons-holder">
               <LocalShippingIcon className="delivery-icons"/>
               </ImgCont>

               <ImgCont className="icons-holder">
              < ShoppingBasketIcon className="delivery-icons" />

               </ImgCont>

               </PaymentDisplay>

               


           </div>
</div>



<div className="footer-list">

<div>
<Logocontainer>

<Image src={img3} />
</Logocontainer>


<h4 className="footer-h4">For The latest apdates ? Subscribe to our Newsletter.</h4>

<input type="text" placeholder="Enter email"  />
<button className="subscribe">Subscribe</button>
</div>


<div>

    <p className="company">Company</p>
    <p className="company-list">Company</p>
    <p  className="company-list">Company</p>
    <p  className="company-list">Company</p>
  

    
</div>

<div className="product1">

    <p className="company">Products</p>
    <p className="company-list">Whisky</p>
    <p  className="company-list">Wine</p>
    <p  className="company-list">Champagne</p>
    <p  className="company-list">Beer</p>
    <p  className="company-list">Vodka</p>
  

    
</div>
</div>

<div className="footer-social-icons">
<FacebookIcon className="icons1"/>
<TwitterIcon className="icons1"/>
<InstagramIcon className="icons1"/>
<WhatsAppIcon className="icons1"/>
</div>


<div className="copy">
  <p className="copy1">  Blue City Invetment LTD &copy; 2022</p>
    </div>
        </Footercontainer>
    )
}

export default Footer;