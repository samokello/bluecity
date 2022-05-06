import React ,{useEffect,useS} from "react";
import styled from "styled-components";



const Catcontainer=styled.div`
width:80%;
margin:0 auto

`

const Cat1 = styled.div`
  background: url("images/glasses/beer.jpg")
    no-repeat center center/cover;
margin:2em;
height:350px;
width:350px
`

const Cat2 = styled.div`
  background: url("images/glasses/kk.jpg")
    no-repeat center center/cover;
margin:2em;
height:350px;
width:350px
`

const Cat3 = styled.div`
  background: url("images/glasses/gg.jpg")
    no-repeat center center/cover;
margin:2em;
height:350px;
width:350px
`


const Cat4 = styled.div`
  background: url("images/glasses/gl.jpg")
    no-repeat center center/cover;
margin:2em;
height:350px;
width:350px
`

const Cat5 = styled.div`
  background: url("images/glasses/chi.jpg")
    no-repeat center center/cover;
margin:2em;
height:350px;
width:350px
`;


const Cat6 = styled.div`
  background: url("images/glasses/glass2.jpg")
    no-repeat center center/cover;
margin:2em;
  height:350px;
  width:350px
`;

const Catbutton=styled.button`
border-radius:5px;
border:none;
outline:none;
padding:.5em;
cursor:pointer;
font-size:1.5rem;
background:maroon;
color:#fff;
`
const Catflex=styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;



`




const Categories=()=>{
  
    return(
        < Catcontainer>

        <h1 className="cat-title" style={{marginTop:"2em"}}>TOP CATEGORIES</h1>

<Catflex>
      
        <Cat1 className="positioning">
            <Catbutton className="catButton">Cognac</Catbutton>
        
        </Cat1>
            
        <Cat2 className="positioning">
            <Catbutton className="catButton">Wines</Catbutton>
        
        </Cat2>

        <Cat3 className="positioning">
            <Catbutton className="catButton">Vodka</Catbutton>
        
        </Cat3>




        <Cat4 className="positioning">
            <Catbutton className="catButton">Whisky</Catbutton>
        
        </Cat4>

        <Cat5  className="positioning">
            <Catbutton className="catButton">Champagne</Catbutton>
        
        </Cat5>

        <Cat6 className="positioning">
            <Catbutton className="catButton">Beer</Catbutton>
        
        </Cat6>

</Catflex>
        </ Catcontainer>
    )
}

export default Categories;