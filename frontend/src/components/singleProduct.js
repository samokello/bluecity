import React from "react";
import styled from "styled-components";

const Single=styled.div`
background:red;
`
const SingleImage=styled.div`
background:blue;
width:300px;
height:300px
`
const SingleContent=styled.div`
background:#fff;
width:300px;
height:300px
`
const Singledisplay=styled.div`
display:flex;
align-items:center;
justify-content:space-between
`


const SingleProduct=()=>{
    return(
        <Single>
            <p>Hello from single products page</p>
            
            <Singledisplay>
<SingleImage>
    
</SingleImage>

<SingleContent>

</SingleContent>
</Singledisplay>

        </Single>
    )
}

export default SingleProduct;