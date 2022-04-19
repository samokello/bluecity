import React, { useState } from "react";
import styled from "@emotion/styled";
import Axios from "axios";
const ProductForm = styled.div`
  background: rad;
  padding: 2em;
  margin: 2em;
`;
const InputHold = styled.div`
  padding-bottm: 1em;
`;

const Products = () => {
  const [Message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Productname: "",
    description: "",
    image: "",
    model: "",
    colors: "",
    price: "",
  });
  async function handleProduct(e) {
    e.preventDefault();
    const url = "https://immense-peak-73012.herokuapp.com/api/products/add";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const data = await fetch(url, options).catch((error) => {
      console.log(error);
    });
    console.log(await data.json());

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 11000) {
          return setMessage("ALOOOOOOOOOO!!!!!");
        } else {
          console.log(data);
          setMessage("AWOOOOOOOO!!!!!!!");
          return data;
        }
      });
  }
  return (
    <ProductForm>
      <div>
        <h3>Liguor Products Details</h3>
      </div>
      <InputHold>
        <labl>Name*</labl>
        <input
          type=""
          placeholder=""
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </InputHold>
      <InputHold>
        <label>Description *</label>
        <input
          type=""
          placeholder=""
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </InputHold>

      <InputHold>
        <label>Category *</label>
        <input
          type=""
          placeholder=""
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
      </InputHold>
      <InputHold>
        <label>Regularprice *</label>
        <input
          type=""
          placeholder=""
          onChange={(e) =>
            setFormData({ ...formData, regularprice: e.target.value })
          }
        />
      </InputHold>
      <InputHold>
        <label>Salesprice *</label>
        <input
          type=""
          placeholder=""
          onChange={(e) =>
            setFormData({ ...formData, salesprice: e.target.value })
          }
        />
      </InputHold>
      <InputHold>
        <label>Image *</label>
        <input
          type="file"
          placeholder="File Upload"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
      </InputHold>

      <InputHold>
                <label>
                    Images *
                </label>
                <input type="file"  placeholder="File Upload"  onChange={(e) => setFormData({ ...formData, spimages: e.target.value })} multiple/>
            </InputHold>
      <div>
        <button onClick={handleProduct}>Submit and Send</button>
      </div>
      <p>{Message}</p>
    </ProductForm>
  );
};
export default Products;
