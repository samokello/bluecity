import React from "react";
import styled from "@emotion/styled";


const Cartcontainer=styled.div`
background:blue;

`

const Productcart=()=>{
    return(
        <Cartcontainer>
            <h1>Products cart</h1>
        </Cartcontainer>
    )
}

export default Productcart;