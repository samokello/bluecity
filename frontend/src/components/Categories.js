import React from "react";
import styled from "styled-components";
import Image from "next/image";
import img2 from "../../public/images/glasses/glass5.jpg";


const Catcontainer=styled.div`
width:100%;
background:red;
`

const Cat1 = styled.div`
  background: url("images/glasses/glass5.jpg")
    no-repeat center center/cover;

  height:300px;
  width:300px
`;



const Categories=()=>{
    return(
        < Catcontainer>
        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>
            
        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>

        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>

        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>

        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>

        <Cat1>
            <button className="catButton">COGNAC</button>
        
        </Cat1>
        </ Catcontainer>
    )
}

export default Categories;