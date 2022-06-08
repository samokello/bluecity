import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav"


const ProductForm = styled.div`
  padding: 2em;
  margin: 2em;
`;
const InputHold = styled.div`
  padding-bottm: 1em;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1em;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 100px;
`;
const SubmitButton = styled.button`
  border-radius: 5px;
 width:50%;
  display: flex;
  margin: 2em auto;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.5em;
  font-size: 1.5rem;
  background: maroon;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5rem;
`;

const Products = () => {
  const [Message, setMessage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    spimages: [],
    salesprice: "",
    regularprice: "",
    category: "",
    onOffer: "false"
  });

  const [submitting, setSubmitting] = useState(true);

  const urlList = [];

  const uploadMainImange = async (e) => {
    const files = e.target.files;
    const mainImgData = new FormData();

    for (let file of files) {
      mainImgData.append("file", file);
      mainImgData.append("upload_preset", "bluecity_uploads");

      // Connect to Cloudinary
    }

    await fetch("https://api.cloudinary.com/v1_1/bluecity/image/upload", {
      method: "POST",
      body: mainImgData,
    })
      .then((res) => res.json())
      .then((data) =>
        setFormData(() => ({ ...formData, image: data.secure_url }))
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImange = async (e) => {
    const files = e.target.files;
    const smallImgData = new FormData();

    for (let file of files) {
      smallImgData.append("file", file);
      smallImgData.append("upload_preset", "bluecity_uploads");

      // Connect to Cloudinary

      await fetch("https://api.cloudinary.com/v1_1/bluecity/image/upload", {
        method: "POST",
        body: smallImgData,
      })
        .then((res) => res.json())
        .then((data) => urlList.push(data.secure_url))
        .catch((err) => {
          console.log(err);
        });

      if (urlList.length >= 3) {
        setSubmitting(false);
        setFormData({ ...formData, spimages: urlList });
      }

      console.log(urlList);
    }
  };

  async function handleProduct(e) {
    e.preventDefault();

    const url = "https://immense-peak-73012.herokuapp.com/api/products/add";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      await fetch(url, options)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(err);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
            <Nav/>

    <ProductForm>
      <div
        style={{
          background: "darkgray",
          padding: "2em",
          borderRadius: "10px",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
          Welcome to Bluecity Admin page
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>
            <InputHold>
              <labl style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Name*
              </labl>
              <Input
                type=""
                placeholder=""
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </InputHold>
            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Description *
              </label>
              <Textarea
                type=""
                placeholder=""
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </InputHold>

            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Category *
              </label>
              <Input
                type=""
                placeholder=""
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </InputHold>
            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Regularprice *
              </label>
              <Input
                type=""
                placeholder=""
                value={formData.regularprice}
                onChange={(e) =>
                  setFormData({ ...formData, regularprice: e.target.value })
                }
              />
            </InputHold>
          </div>

          <div>
            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Salesprice *
              </label>
              <Input
                type=""
                placeholder=""
                value={formData.salesprice}
                onChange={(e) =>
                  setFormData({ ...formData, salesprice: e.target.value })
                }
              />
            </InputHold>
            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Image *
              </label>
              <Input
                type="file"
                name="single"
                placeholder="File Upload"
                onChange={(e) => uploadMainImange(e)}
              />
            </InputHold>

            <InputHold>
              <label style={{ fontSize: "1.5rem", marginBottom: ".5em" }}>
                Images *
              </label>
              <Input
                type="file"
                name="multiple"
                placeholder="File Upload"
                onChange={(e) => uploadImange(e)}
                multiple
                style={{ width: "50%", padding: "2em", cursor: "pointer" }}
              />
            </InputHold>
          </div>
        </div>

<div style={{width:"50%",marginLeft:"12%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
<label style={{width:"50%",fontSize:"1.5rem",marginBottom:".5em"}}>Product on offer:</label>

<select style={{width:"50%",fontSize:"1.5rem",padding:"1em",outline:"none",border:"none"}}  onChange={(e) =>
                  setFormData({ ...formData, onOffer: e.target.value })
                }>
    
    <option>True</option>
    <option selected >False</option>
</select>



</div>
 








        <div>
          <SubmitButton
            onClick={handleProduct}
            disabled={submitting}
            style={{ cursor: submitting === false && "pointer" }}
          >
            Submit and Send
          </SubmitButton>
        </div>
        <p>{Message}</p>
      </div>

    </ProductForm>
    <Footer/>

    </div>
  );
};
export default Products;
