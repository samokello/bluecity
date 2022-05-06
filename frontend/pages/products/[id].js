import Nav from "../../src/components/Nav";
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BluecityContext from "../../src/bluecityState";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../../src/components/Footer";

const CartContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid darkgrey;
  box-shadow: 1px 1px 1px 1px darkgray;
`;

const CartFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const SingleDetails = styled.div`
  width: 50%;
  padding: 2em;
  font-size: 2em;
  align-items: center;
  margin-left: 2em;
`;
const Button = styled.button`
  width: 50%;
  padding: 0.1em;
  background: maroon;
  outline: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
`;

const Image = styled.img`
  border: 2px solid darkgrey;
  object-fit: cover;
  box-shadow: 1px 1px 1px 1px darkgray;
  margin: 2em;
  border-radius: 5px;
`;

const ListImage = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 2em;
  margin: 2em;
  padding: 1em;
  width: 100%;
  object-fit: cover;
`;

const SingleImage = styled.div`
  width: 40%;
  background: #fff;
  margin: 2em;
`;

// export const getStaticPaths = async () => {

//   const res = await fetch(
//     "https://immense-peak-73012.herokuapp.com/api/products"
//   );
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { id: item._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };

// };

// export const getStaticProps = async (context) => {

//   const id = context.params.id;
//   const res = await fetch(
//     "https://immense-peak-73012.herokuapp.com/api/products/find/" + id
//   );
//   const data = await res.json();

//   return {
//     props: { item: data },
//   };

// };

// const cartFormLocalStorage=JSON.parse(localStorage.getItem("cart") || "[]")

const Products = () => {
  const { productState, cartState } = useContext(BluecityContext);
  const [cart, setCart] = cartState;
  const [products, setProducts] = productState;

  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://immense-peak-73012.herokuapp.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // if (localStorage.getItem("cart") !== null) {
    //   return setCart(() => JSON.parse(localStorage.getItem("cart")));
    // }
  }, []);

  console.log(products);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      return setCart(() => JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const handleClick = (e, cartItem) => {
    if (e.target.innerText === "Add to cart") {
      setCart([...cart, cartItem]);
      e.target.innerText = "Added to cart";
    }
  };

  const router = useRouter();
  const { id } = router.query;

  return products.map((item) => {
    if (item._id === id) {
      return (
        <div>
          <Nav />
          <CartContainer>
            <CartFlex>
              <SingleImage>
                <Image src={item.image} width="300" />
              </SingleImage>

              <SingleDetails className="singleDetails">
                <h3 style={{ color: "red", marginBottom: "2em" }}>
                  {" "}
                  Name:{item.name}
                </h3>

                <h4 style={{ marginBottom: "2em" }}>
                  Category: {item.category}
                </h4>

                <p style={{ marginBottom: "2em" }}>
                  {" "}
                  Price : Ksh. {item.salesprice}
                </p>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "2em" }}
                >
                  <Button
                    onClick={(e) => handleClick(e, item)}
                    className="addtocart"
                  >
                    {cart.some((cartItem) => cartItem._id === item._id)
                      ? "Added to cart"
                      : "Add to cart"}
                  </Button>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: "2em",
                    }}
                  >
                    <WhatsAppIcon
                      style={{
                        fontSize: "1.5em",
                        cursor: "pointer",
                        color: "#06FF00",
                      }}
                    />
                    <FavoriteBorderIcon
                      style={{
                        fontSize: "1.5em",
                        cursor: "pointer",
                        color: "red",
                      }}
                    />
                  </div>
                </div>
              </SingleDetails>
            </CartFlex>
          </CartContainer>

          <p
            style={{
              lineHeight: "2em",
              fontSize: "1.5rem",
              width: "80%",
              alignContent: "center",
              margin: "0 auto",
              padding: "1em",
              border: "1px solid darkgrey",
              marginTop: "2em",
              boxShadow: "1px 1px 1px darkgrey",
            }}
          >
            {item.description}
          </p>

          <ListImage>
            <div
              style={{
                border: "2px solid darkgrey",
                boxShadow: "1px 1px 1px darkgrey",
                display: "flex",
                flexDirection: "column",
              }}
              className="image-list"
            >
              <img src={item.spimages[0]} width="300" height="300" />
              <div
                style={{
                  fontSize: "2em",
                  display: "flex",
                  gap: "2em",
                  justifyContent: "center",
                  margin: "1em",
                }}
              ></div>
            </div>

            <div
              style={{
                border: "2px solid darkgrey",
                display: "flex",
                boxShadow: "1px 1px 1px darkgrey",
                flexDirection: "column",
              }}
              className="image-list"
            >
              <img src={item.spimages[1]} width="300" height="300" />

            
            </div>

            <div
              style={{
                border: "2px solid darkgrey",
                display: "flex",
                flexDirection: "column",
                boxShadow: "1px 1px 1px darkgrey",
                margin: "1em",
              }}
              className="image-list"
            >
              <img src={item.spimages[2]} width="300" height="300" />

            
            </div>
          </ListImage>

          <Footer />
        </div>
      );
    }
  });
};

export default Products;
