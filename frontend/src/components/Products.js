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
  const [imgUrl, setImgUrl]=useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    spimages:[],
    salesprice: "",
    regularprice: "",
    category: "",
  });

  const [submitting, setSubmitting] =useState(true);

  const urlList = [];

  const uploadMainImange = async (e)=>{
    const files = e.target.files;
    const mainImgData = new FormData();
    
    for(let file of files) {
      mainImgData.append("file", file);
      mainImgData.append("upload_preset", "bluecity_uploads");

      // Connect to Cloudinary


    }


    await fetch("https://api.cloudinary.com/v1_1/bluecity/image/upload",{
      method:"POST",
      body: mainImgData
    })
    .then(res => res.json())
    .then(data=>setFormData(()=>({...formData, image:data.secure_url})))
    
  // formData.image !== '' && console.log(formData.image)
    
  }

 


  

  const uploadImange = async (e)=>{
    const files = e.target.files;
    const smallImgData = new FormData();
    
    for(let file of files) {
      smallImgData.append("file", file);
      smallImgData.append("upload_preset", "bluecity_uploads");

      // Connect to Cloudinary

    await fetch("https://api.cloudinary.com/v1_1/bluecity/image/upload",{
      method:"POST",
      body: smallImgData
    })
    .then(res => res.json())
    .then(data=>urlList.push(data.secure_url))

    if(urlList.length >= 3) {
      setSubmitting(false)
      setFormData({...formData, spimages:urlList})
    }
    
    console.log(urlList)

    }

    
    
    
    
  }
  

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
  .then(res =>res.json())
  .then(data=> console.log(data))
  .catch(err)
 
    
  } catch (err) {
    console.log(err)
  }
   

    }
      

    
        // console.log(formData)

     


  
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
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </InputHold>
      <InputHold>
        <label>Description *</label>
        <input
          type=""
          placeholder=""
          value={formData.description}
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
          value={formData.category}
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
          value={formData.regularprice}
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
          value={formData.salesprice}
          onChange={(e) =>
            setFormData({ ...formData, salesprice: e.target.value })
          }
        />
      </InputHold>
      <InputHold>
        <label>Image *</label>
        <input
          type="file"
          name="single"
          placeholder="File Upload"
          onChange={(e) => uploadMainImange(e)}
        />
      </InputHold>

      <InputHold>
                <label>
                    Images *
                </label>
                <input type="file"  name="multiple" placeholder="File Upload"  onChange={(e) => uploadImange(e)} multiple/>
            </InputHold>
      <div>
        <button onClick={handleProduct} disabled={submitting} >Submit and Send</button>
      </div>
      <p>{Message}</p>
    </ProductForm>
  );
};
export default Products;
