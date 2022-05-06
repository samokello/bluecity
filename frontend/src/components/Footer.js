import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import img3 from "../../public/logo/logo1.svg";
import img4 from "../../public/icons/m-pesa.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";

const Footercontainer=styled.div`

background:#000;
color:#fff;

padding:2em;
border-radius:5px


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
&:hover {
    transform: translate(1% );
    transition: 0.1s ease-in;
  }
margin:2em;
cursor:pointer;
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

        <div>
        <Footercontainer>

<div className="display2">

           <div className="payment-holder">
               <h3 style={{textAlign:"center"}}>Payment Methods</h3>

<PaymentDisplay>
               <ImgCont>
               <Img src="/icons/m-pesa.png"/>
               </ImgCont>


               <ImgCont>
               <Img src="/icons/visa.svg"/>
               </ImgCont>

               <ImgCont>
               <Img src="/icons/master-card.svg"/>

               </ImgCont>

               </PaymentDisplay>

               


           </div>




           <div className="payment-holder">
               <h3 style={{textAlign:"center"}}>Delivery Methods</h3>

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



<div style={{borderBottom:"1px solid darkgrey",display:"flex",alignItems:"center",gap:"4em", width:"60%",margin:"0 auto",justifyContent:"space-between"}}>

<div>

    <Link href={"/"}>
<Logocontainer>

<Image src={img3} />
</Logocontainer>
</Link>

<div style={{marginLeft:"2em"}}>


<h4 >For The latest apdates ? Subscribe to our Newsletter.</h4>
<div  style={{display:"flex", width:"100%"}}>

<input type="text" placeholder="Enter email" style={{width:"80%"}} />
<button className="subscribe">Subscribe</button>

</div>
</div>
</div>


<div>

    <p className="company">About Us</p>
    <p className="company-list">Vission</p>
    <p  className="company-list">Mission</p>
    <p  className="company-list">Value</p>
    <p  className="company-list">Responsibility</p>

  

    
</div>

<div className="product1">

    <p className="company">Products</p>

    <div style={{display:"flex",alignItems:"center",gap:"2em"}}>
        <div>
    <p className="company-list">Whisky</p>
    <p  className="company-list">Wine</p>
    <p  className="company-list">Champagne</p>
    <p  className="company-list">Spirits</p>
    <p  className="company-list">Juice </p>



</div>
    <div>
    <p  className="company-list">Beer</p>
    <p  className="company-list">Vodka</p>
    <p  className="company-list">Cognac</p>
</div>
  
    </div>
 

    
</div>
</div>

<div style={{display:"flex",fontSize:"2em",gap:"2em",cursor:"pointer",alignItems:"center",justifyContent:"center",marginTop:"1em"}}>
<FacebookIcon />
<TwitterIcon />
<InstagramIcon />
<WhatsAppIcon />
</div>



        </Footercontainer>
        <div style={{background:"maroon",fontSize:"1.5rem",textAlign:"center",color:"#fff"}}>
  <p style={{marginBottom:"0 !important"}}>  Blue City Invetment LTD &copy; 2022</p>
    </div>
        </div>
    )
}

export default Footer;