import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
// import styled from "@emotion/styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";

const FormContainer=styled.div`

background: red;
border: 2px blue solid;

`
const Login = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassWord, setConfirmPassWord] = useState("");
  const [Message, setMessage] = useState("");

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
        if (data.code === 11000) {
            return setMessage("User already Logged in")
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

  function onChangePassWord(e) {
    const passWordValue = e.target.value;
    setPassword(passWordValue);
  }

  function onConfirmPassWord(e) {
    const ConfirmPassWordValue = e.target.value;
    setConfirmPassWord(ConfirmPassWordValue);
  }

  return (
    <FormContainer>
      <div>
        <div className="login-container">
          <div className="login-content">
            <div className="enterprise-title">
              <h1>Welcome To BlueCity Investment</h1>
            </div>

            <form>
              <div>
                <h1 className="enterprise-title">LOGIN</h1>

                <div className="form">
                
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

<p>{Message}</p>


                <div className="checkbox-container">
                  <div className="check">
                    <div>
                      <input type="checkbox" />
                    </div>

                    <div>
                      <p>Remember me</p>
                    </div>
                  </div>

                  <div className="link">
                    <p>
                      <a href="#">Forgot your Passward</a>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <input type="text" />
            </form>

            <div className="empty-div"></div>
          </div>

          <div className="login-background">
            <div className="heading">
              <p className="text-cont">WELCOME TO</p>
              <h1>BlueCity Investment Company.</h1>
              <p className="text-pad">The home of Reliable Shopping</p>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default Login;
