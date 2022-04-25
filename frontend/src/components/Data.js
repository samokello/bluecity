import React, { useState , useEffect} from "react";    
import axios from "axios";
import styled from "@emotion/styled";


const Pcontainer=styled.div`
width:100%;
color:#000;
display:flex;
align-items:center;
gap:2em
`
const ImageContainer=styled.div`
width:100%;

`


const HotHolder=styled.div`
width:500px;

border:2px solid darkgrey;


`
const Image=styled.img`
width:100%;
height:400px
object-fit:cover;
`

const Flex=styled.div`
display:flex;
align-items:center;
gap:2em;
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

export default function ProductPost(){
    const [products, setProducts ]=useState([])
    const url ="https://immense-peak-73012.herokuapp.com/api/products" 

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setProducts(res.data)
        })
    }, [url])

    console.log(products)


    return(
< Pcontainer>

{products.map(item=>(
    < HotHolder>
        
        <ImageContainer>
        <Image src={item.image}/>

        </ImageContainer>
        <h3>{item.name}</h3>


<Flex>

<h3>Ksh{item.regularprice}</h3>
        <h3>Ksh{item.salesprice}</h3>

</Flex>
       
<Hotbutton>Shop now</Hotbutton>

    </ HotHolder>
))}
</Pcontainer>
    )
}

