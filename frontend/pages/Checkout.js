import React from "react";
import styled from "@emotion/styled";

const Form=styled.div`
display:flex;
align-items:center;
width:80%;
justify-content:space-between


`
const FormHolder=styled.div`
box-shadow:2px 2px 2px darkgrey;
background:#fff;
width:70%;
margin:2em auto;
border:1px solid darkgrey
`


const Checkout=()=>{

  const handleCheckout=(e)=> {
    alert("Your order has been recieved ,you will recieve your goods shotly")
  
}
    return(
        <FormHolder >
            <form>
            <div style={{background:"",padding:"2em"}}>
            <h1 style={{color:"red"}}>Checkout</h1>
                <Form >
              <div >
                <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                  <label htmlFor="Text" style={{marginBottom:"1em"}}>Full Name</label>

                  <input style={{width:"100%",border:"2px solid darkgrey"}}
                    type="text"
                   placeholder="Name"
                  />
                </div>
            

              <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label style={{marginBottom:"1em"}}>
                  Your Location
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder="Location"
                
                />
              </div>

              <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label style={{marginBottom:"1em"}}>
                  House
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder="House"
                
                />
              </div>

              </div>




<div>
<div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label style={{marginBottom:"1em"}}>
                  Phone Number
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder="Phone Number"
                
                />
              </div>


              <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label style={{marginBottom:"1em"}}>
                  Raod/ Street
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder="  Raod/ Street"
                
                />
              </div>




              <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label style={{marginBottom:"1em"}}>
                Your Email
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder=" Email"
                
                />
              </div>

</div>

</Form>
<label style={{marginBottom:"2em",fontSize:"1.5rem"}}>
                  Your Location
                </label>
<textarea style={{width:"100%",height:"100px",outline:"none"}}>

</textarea>

            <div style={{padding:".5em",display:"flex",justifyContent:"end"}}>
            <button style={{width:"20%",padding:"1em",background:"maroon",color:"#fff",fontSize:"1rem",border:"none",cursor:"pointer "}}
               onClick={(e)=>handleCheckout()} >
                  Place your Order
                </button>
                
                </div> 
              
             

            </div>

         
           
          </form>



        </FormHolder>
    )
}

export default Checkout;