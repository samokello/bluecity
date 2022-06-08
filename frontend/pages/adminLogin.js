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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const FormContainer = styled.div``;
const ArrowForward = styled.div`
  margin-top: 2em;
  transition: ease background-color 250ms;
  &:hover {
    transform: translate(10%);
    transition: 1s ease-out;
  }
`;
const Adminform = styled.div`
background:linear-gradient(rgba(59, 119, 121, 0.8),rgba(50,112,114,0.8)),
border:1px solid darkgrey,
width:"100%",
background-image:url(/images/slides/aloo.jpg,
height:100vh

`;

const Login = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassWord, setConfirmPassWord] = useState("");
  const [Message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState({
    username: false,
    password: false,
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
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
      body: JSON.stringify(formData),
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.username === null) {
          return setMessage("User already Logged in");
        } else {
          console.log(data);
          setMessage("Succesfully logged in");
          return data;
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });

    const data = await fetch(url, options);

    console.log(data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.username !== "") {
        setValidationMessage({ ...validationMessage, username: true });
        setValidationMessage({ ...validationMessage, password: false });
        setValidationMessage({
          ...validationMessage,
          username: "username is required",
        });
      } else if (user.password !== "") {
        setValidationMessage({ ...validationMessage, username: false });
        setValidationMessage({ ...validationMessage, password: true });
        setValidationMessage({
          ...validationMessage,
          username: "password is required",
        });
      } else {
        const data = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(user),
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        }).catch((err) => console.log(err));
        const result = await data.json();
        if (result.username !== undefined) router.push("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <FormContainer>
        <div
          style={{
            border: "1px solid darkgrey",
            width: "100%",
            height: "100vh",
            backgroundImage: "url(/images/slides/aloo.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div>
            <div>
              <h2
                style={{ textAlign: "center", fontSize: "4rem", color: "#fff" }}
              >
                Welcome To BlueCity Investment admin login Page
              </h2>

              <form
                className="admin-login"
                style={{
                  padding: "2em",
                  display: "flex",
                  justifyContent: "center",

                  width: "40%",
                  height: "50%",
                  position: "absolute",
                  top: "25%",
                  left: "30%",
                  paddingLeft: "2em",
                  borderRadius: "5px",
                }}
              >
                <div style={{ width: "80%" }}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#fff",
                      padding: ".5em",
                    }}
                  >
                    {Message}
                  </p>

                  <h2 style={{ color: "#fff", fontSize: "2rem" }}>
                    Login here
                  </h2>
                  <div style={{ marginBottom: "2em" }}>
                    <input
                      type="text"
                      placeholder="Username"
                      style={{ width: "100%", border: " solid 1px darkgrey" }}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <div>
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        style={{ width: "100%", border: " solid 1px darkgrey" }}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleLogin(e)}
                    style={{
                      width: "20%",
                      padding: "1em",
                      position: "absolute",
                      right: "8%",
                      margin: "2em 0em",
                      borderRadius: "5px",
                      border: "none",
                      background: "#fff",
                      padding: "1em",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
