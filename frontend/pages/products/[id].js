import Nav from "../../src/components/Nav";
import { useContext } from "react";
import CartContext from "../../src/CartState";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React, {useState} from "react";
import {setItemCount, itemCount} from '../../src/components/Nav'

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://immense-peak-73012.herokuapp.com/api/products"
  );
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://immense-peak-73012.herokuapp.com/api/products/find/" + id
  );
  const data = await res.json();

  return {
    props: { item: data },
  };
};


const Products = ({ item }) => {
  const [cart, setCart] = useContext(CartContext);
  // const [itemCount, setItemCount] = useState([0]);

  const handleClick = (cartItem, setItemCount) => {
      setCart(()=>cartItem)
      setItemCount([...itemCount,cart])
      itemCount.push(item)



  };
  
  return (
    <div>
      {console.log(cart)}
      <Nav />
      <img src={item.image} width="300" />

      {/* </ImageContainer> */}
      <div>
        <h3 className="product">{item.name}</h3>
      </div>

      <div>
        <p>Ksh{item.salesprice}</p>
      </div>

      <button onClick={()=>handleClick(item)}>Add to Cart</button>

      <button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <ClearIcon fontSize="small" />
          </button>
     
            <button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </button>


    </div>
  );
};

export default Products;
