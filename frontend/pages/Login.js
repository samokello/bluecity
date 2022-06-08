import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
// import styled from "@emotion/styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";



const FormContainer=styled.div`
margin:2em;
display:flex;
justify-content:center;

`
const ArrowForward = styled.div`
margin-top:2em;
transition: ease background-color 250ms;
&:hover {
  transform: translate(10%);
  transition: 1s ease-out;
}
`

const Login = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassWord, setConfirmPassWord] = useState("");
  const [Message, setMessage] = useState("");
  const [validationMessage, setValidationMessage]=useState({
    username:false,
    password:false
  })
  const [user, setUser]=useState({
    username:"",
    password:""
  });

  const [showPass, setShowPass] = useState(false);

  const togglePassWardVisibility = () => {
    setShowPass(!showPass);
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  async function handleLogin(e) {
    e.preventDefault();
    
    const url = "https://immense-peak-73012.herokuapp.com/api/auth/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    };

    return fetch(url, options)
    .then(res => res.json())
    .then(data => {
        if (data.username === null) {
            return setMessage("Wrong Credentials")
        } 
        
        
        else {
            console.log(data)
            setMessage("Succesfully Logged in")
            return data
        }
    })
    .catch(error => {
        console.log(error.response.status)
    })




    const data = await fetch(url, options);

    console.log(data.json());
  


  }

const handleSubmit=async e=>{
  e.preventDefault()
  try{
  if(user.username !==""){
setValidationMessage({...validationMessage,username:true})
setValidationMessage({...validationMessage,password:false})
setValidationMessage({...validationMessage,username:"username is required"})

    }
    else if (user.password !==""){
      setValidationMessage({...validationMessage,username:false})
      setValidationMessage({...validationMessage,password:true})
      setValidationMessage({...validationMessage,username:"password is required"})

    }


else{
  const data=await fetch("http://localhost:8000/api/auth/login",{
method:"POST",
mode:"cors",
body:JSON.stringify(user),
headers:{
  "content-type":"application/json",
  "accept":"application/json"
}
  })
.catch(err=>console.log(err))
const result=await data.json()
if(result.username !==undefined)
router.push("/admin")

}}

catch(err){
  console.log(err)
}
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
          <FormContainer>
      <div style={{margin:"2em" ,border:"2px solid darkgrey",width:"100%",alignItems:"center",background:"darkgrey"}}>
    
        <div style={{display:"flex",gap:"2em",margin:"2em"}}>
          <div style={{width:"50%",padding:"2em"}}>
            <div className="enterprise-title">
              <h2>Welcome To BlueCity Investment Login Page</h2>
              
            </div>

            <form>
              <div>
              <h2>Login  here</h2>
                <div style={{marginBottom:"2em"}} >
                
                  <input
                    type="text"
                    placeholder="Username"
                    className="passward btn-red form__label"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                  
                </div>

                <div className="passward-holder ">
                  <div className="form">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      className="passward btn-red form__label"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    
                  </div>

                  <div className="eye-icon" onClick={togglePassWardVisibility}>
                    {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>

                <button className="login-btn" onClick={(e) => handleLogin(e)}>
                  Login
                </button>

                <div style={{display:"flex",gap:".2em",fontSize:"1.5rem"}}>
          <p>Don't have an account? </p>


<Link href={"/SignUp"}>
<ArrowForward style={{color:"green",cursor:"pointer"}}> Sign up here<ArrowForwardIcon style={{color:"green",cursor:"pointer",fontSize:"1rem"}}/> </ArrowForward> 

</Link>


          </div>

<p style={{fontSize:"1.5rem",color:"green"}}>{Message}</p>

              </div>

            </form>

            
          </div>

          <div className="login-background">
            <div className="heading">
              <p className="text-cont">WELCOME TO</p>
              <h2>BlueCity Investment Company.</h2>
              <p className="text-pad">The home of Reliable Shopping</p>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
    <Footer/>
    </div>
  );
};

export default Login;
