import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";

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
      <div className="signup-page">
        <h1>Welcome to Blue City Investment Company</h1>
        <h3>Sign Up Your Account Here</h3>
        <div className="form-content">
          <form>
            <div className="form-holder">
              <div className="signup-name ">
                <div className="my-inputs">
                  <label htmlFor="Text">Username</label>

                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="my-inputs">
                <label htmlFor="email" className="">
                  Email
                </label>

                <input
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="password-holder signup-name">
                <div className="my-inputs">
                  <label htmlFor="password">password</label>

                  <input
                    onChange={(e) => onChangePassWord(e)}
                    type="password"
                    className="input"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <div className="my-inputs">
                  <label htmlFor="password">Confirm Your Password</label>

                  <input
                    onChange={(e) => onConfirmPassWord(e)}
                    type="password"
                  />
                </div>

                <div className="correct-icon">
                  {password === ConfirmPassWord ? (
                    <CheckIcon style={{ fontSize: "2rem" }} />
                  ) : (
                    <ClearIcon style={{ fontSize: "2rem" }} />
                  )}
                </div>
              </div>

              <div className="my-inputs">
                <button
                  className="signup-button"
                  onClick={(e) => {
                    handleRegister(e);
                  }}
                >
                  SIGN UP
                </button>
              </div>

              <p>{Message}</p>
            </div>

            <div className="have-account">
              <p>Already have an account? Login LOG IN HERE</p>
            </div>
          </form>

          <div className="accounts">
            <h1>SIGN UP WITH FACEBOOK OR GOOGLE</h1>
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
    </div>
  );
};

export default SignUp;
