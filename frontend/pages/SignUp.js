import React, { useState ,Component} from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";





const ArrowForward = styled.div`
transition: ease background-color 250ms;
&:hover {
  transform: translate(10%);
  transition: 1s ease-out;
}
`




const SignUp = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassWord, setConfirmPassWord] = useState("");
  const [Message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function handleRegister(e) {
    e.preventDefault();

    const url = "https://immense-peak-73012.herokuapp.com/api/auth/register";
    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 11000) {
          return setMessage("User already Loggedin");
        } else {
          console.log(data);
          setMessage("Succesfully Registered you can Login");
          return data;
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }

  function onChangePassWord(e) {
    const passWordValue = e.target.value;
    setPassword(passWordValue);
  }

  function onConfirmPassWord(e) {
    const ConfirmPassWordValue = e.target.value;
    setConfirmPassWord(ConfirmPassWordValue);
  }

  return (
    <div>
      <Nav/>
      <div className="signup-page">        
        <div  style={{width:"80%",height:"100%",background:"darkgrey",margin:"0 auto",padding:"2em"}} className="form-content">
          <form>
            <div style={{background:"",padding:"2em"}}>
            <h2 style={{textAlign:"center"}}>Welcome to Blue City Investment Company</h2>

            <h3 style={{fontSize:"2rem"}}>Sign up here</h3>
              <div className="signup-name ">
                <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                  <label htmlFor="Text" style={{marginBottom:"1em"}}>Username</label>

                  <input style={{width:"100%",border:"2px solid darkgrey"}}
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                <label htmlFor="email" style={{marginBottom:"1em"}}>
                  Email
                </label>

                <input style={{width:"100%",border:"2px solid darkgrey"}}
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="password-holder signup-name">
                <div className="my-inputs" style={{display:"flex", flexDirection:"column"}}>
                  <label htmlFor="password" style={{marginBottom:"1em"}}>password</label>

                  <input style={{width:"100%",border:"2px solid darkgrey"}}
                    onChange={(e) => onChangePassWord(e)}
                    type="password"
                    className="input"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                    <div className="my-inputs">
                  <label htmlFor="password" >Confirm Your Password</label>

                  <input style={{width:"100%",border:"2px solid darkgrey"}}
                    onChange={(e) => onConfirmPassWord(e)}
                    type="password"
                  />
                </div>

                <div className="correct-icon">
                  {password === ConfirmPassWord ? (
                                        <ClearIcon style={{ fontSize: "2rem" ,color:"red"}} />

                  ) : (
                    <CheckIcon style={{ fontSize: "2rem" }} />

                  )}
                </div>
               
              </div>

             
                <button style={{margin:"0 auto",background:"maroon",display:"flex",justifyContent:"center", width:"80%"}}
                  className="signup-button"
                  onClick={(e) => {
                    handleRegister(e);
                  }}
                >
                  Sign Up
                </button>
             

              <p style={{fontSize:"1rem",color:"green"}}>{Message}</p>
            </div>

          <div style={{display:"flex",alignItems:"center", gap:".2em",fontSize:"1.5rem"}}>
          <p>Already have an account? </p>


<Link href={"/Login"}>
<ArrowForward style={{color:"green",cursor:"pointer"}}> Log in here <ArrowForwardIcon style={{color:"green",cursor:"pointer",fontSize:"1.5rem"}}/> </ArrowForward> 

</Link>


          </div>
           
          </form>

          <div className="accounts">
            <h1>Sign with google or facebook</h1>
            <div className=" position">
              <FacebookIcon className="icon" />

              <button className="signup-button">Continue with Facebook </button>
            </div>

            <div className="google position">
              <GoogleIcon className="facebook-account icon" />
              <button className="signup-button">Continue with Google</button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default SignUp;
