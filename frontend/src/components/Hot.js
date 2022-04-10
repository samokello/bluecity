import React from "react";
import styled from "styled-components";
import img2 from "../../public/images/product1/hot1.jpg";


const Hotcontainer=styled.div`
background:blue;
width:80%;
margin:0 auto;

`
const Img = styled.img`
width:100%;
height:100%;
object-fit:contain;

`

const Hotbutton=styled.button`
border-radius:5px;
border:none;
outline:none;
padding:.5em;
cursor:pointer;
font-size:1.5rem;
background:maroon;
width:100%;
color:#fff;
`

const Hot=()=>{
    return(
        <Hotcontainer>

            <h2 className="hot-title">HOT THIS MONTH</h2>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <Img src="images/product1/hot1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Glendifich 18years 700ml</h5>
        <div className="hot-paragraph">
        <p className="card-text">Ksh 7,000 </p>
        <p className="card-active">Ksh 6,500 </p>
</div>

<Hotbutton>Add to cart</Hotbutton>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Img src="images/product1/hot2.jpg" className="card-img-top" alt="..."/>
      <div className="card-body"> 
       <h5 className="card-title">Glendifich 18years 700ml</h5>
       
<div className="hot-paragraph">
        <p className="card-text">Ksh 7,000 </p>
        <p className="card-active">Ksh 6,500 </p>
</div>

<Hotbutton>Add to cart</Hotbutton>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Img src="images/product1/hot3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body"> 
       <h5 className="card-title">Glendifich 18years 700ml</h5>
       <div className="hot-paragraph">
        <p className="card-text">Ksh 7,000 </p>
        <p className="card-active">Ksh 6,500 </p>
</div>

<Hotbutton>Add to cart</Hotbutton>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <Img src="images/product1/gil.jpg" className="card-img-top" alt="..."/>
      <div className="card-body"> 
       <h5 className="card-title">Glendifich 18years 700ml</h5>
       <div className="hot-paragraph">
        <p className="card-text">Ksh 7,000 </p>
        <p className="card-active">Ksh 6,500 </p>
</div>

<Hotbutton>Add to cart</Hotbutton>
      </div>
    </div>
  </div>


</div>


       
        </Hotcontainer>
    )
}

export default Hot;