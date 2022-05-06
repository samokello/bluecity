import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import Link from "next/link";
import Nav from "../src/components/Nav";
import BluecityContext from "../src/bluecityState";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../src/components/Footer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Pcontainer = styled.div`
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  background: #fff;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HotHolder = styled.div`
  width: 20%;
  cursor: pointer;
  box-shadow: 2px 2px 2px 2px darkgrey;
  border: 1px solid darkgray;
  transition: ease background-color 250ms;
  &:hover {
    transform: translate(1%);
    transition: 0.5s ease-out;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Flex = styled.div`
  justify-content: center;
  padding: 0.5em;
  text-align: center;
`;

const Hotbutton = styled.button`
  border: none;
  outline: none;
  padding: 0.5em;
  margin: 1em;
  cursor: pointer;
  padding: 1em;
  background: maroon;
  width: 50%%;
  color: #fff;
  border-radius: 5px;
`;
const ButtonHolder = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

const WhatsappContainer = styled.div`
  .whatsapp_float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .whatsapp-icon {
    margin-top: 16px;
  }

  /* for mobile */
  @media screen and (max-width: 767px) {
    .whatsapp-icon {
      margin-top: 10px;
    }

    .whatsapp_float {
      width: 40px;
      height: 40px;
      bottom: 20px;
      right: 10px;
      font-size: 22px;
    }
  }
`;

export default function ProductPage() {
  const [category, setCategory] = useState("");

  const [favorite, setFavorite] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);

  const { cartState, productState } = useContext(BluecityContext);

  const [cart, setCart] = cartState;

  const [products, setProducts] = productState;

  const url = "https://immense-peak-73012.herokuapp.com/api/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });

    setProductsCopy([...products]);
  }, []);

  // console.log(cart);

  // return

  const handleClick = (e, cartItem) => {
    if (e.target.innerText === "Add to cart") {
      setCart([...cart, cartItem]);
      e.target.innerText = "Added to cart";
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    setCategory(e.target.innerText.toLowerCase());
  };

  const addToFavorite = (e) => {
    alert("You have clicked Favorite icon");
  };

  const removeFavorite = (e) => {};

  return (
    <div>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <h4
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "Yanone Kaffeesatz sans-serif",
          }}
        >
          Filter By Category
        </h4>
        <div>
          {/* <select style={{width:"200px",padding:"1em",fontSize:"1rem",borderRadius:"5px"}}>
  <option value="A">Wines</option>
  <option value="B">Vodka</option>
  <option value="C">Chamagne</option>
  <option value="D">Beer</option>
  <option value="E">Whisky</option>

  <option value="F">Cognac</option>

</select> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2em",
            }}
          >
            {/* <button>All Products</button> */}
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              All{" "}
            </button>

            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Whisky
            </button>
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Wine
            </button>
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Beer
            </button>
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Vodka
            </button>
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Cognac
            </button>
            <button
              style={{ padding: ".5em", cursor: "pointer" }}
              onClick={(e) => handleCheckout(e)}
            >
              Champagne
            </button>
          </div>
        </div>
      </div>
      <Pcontainer>
        {products.map((item) => {
          if (category === "" || category.toLocaleLowerCase() === "all") {
            return (
              <HotHolder>
                {/* <ImageContainer> */}
                <Link href={`/products/${item._id}`}>
                  <Image src={item.image} />
                </Link>

                {/* </ImageContainer> */}

                <Flex>
                  <h3 className="productname">{item.name}</h3>
                  <p>Ksh. {item.salesprice}</p>
                </Flex>
                <ButtonHolder>
                  <Link href={"/Checkout"}>
                    <Hotbutton
                      className="shop-btn"
                      // onClick={(e)=>handleCheckout()}
                    >
                      Shop now
                    </Hotbutton>
                  </Link>

                  <Hotbutton
                    onClick={(e) => handleClick(e, item)}
                    className="addtocart"
                  >
                    {cart.some((cartItem) => cartItem._id === item._id)
                      ? "Added to cart"
                      : "Add to cart"}
                  </Hotbutton>

                  <Link href={"/Favorite"}>
                    <FavoriteBorderIcon
                      style={{ color: "red", fontSize: "2rem" }}
                    />
                  </Link>
                </ButtonHolder>

                {/* <input style={{padding:".5em",cursor:"pointer"}} type="button" value="whisky" onClick={(e)=>handleCheckout(item.category)}/> */}
              </HotHolder>
            );
          } else if (item.category.toLowerCase() === category.toLowerCase()) {

            return (
            <HotHolder>
              {/* <ImageContainer> */}
              <Link href={`/products/${item._id}`}>
                <Image src={item.image} />
              </Link>

              {/* </ImageContainer> */}

              <Flex>
                <h3 className="productname">{item.name}</h3>
                <p>Ksh. {item.salesprice}</p>
              </Flex>
              <ButtonHolder>
                <Link href={"/Checkout"}>
                  <Hotbutton
                    className="shop-btn"
                    // onClick={(e)=>handleCheckout()}
                  >
                    Shop now
                  </Hotbutton>
                </Link>

                <Hotbutton
                  onClick={(e) => handleClick(e, item)}
                  className="addtocart"
                >
                  {cart.some((cartItem) => cartItem._id === item._id)
                    ? "Added to cart"
                    : "Add to cart"}
                </Hotbutton>

                <Link href={"/Favorite"}>
                  <FavoriteBorderIcon
                    style={{ color: "red", fontSize: "2rem" }}
                  />
                </Link>
              </ButtonHolder>

              {/* <input style={{padding:".5em",cursor:"pointer"}} type="button" value="whisky" onClick={(e)=>handleCheckout(item.category)}/> */}
            </HotHolder>
            )
          }
        })}
      </Pcontainer>

      <WhatsappContainer>
        <a
          href="https://wa.me/254726964415"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>
      </WhatsappContainer>

      <Footer />
    </div>
  );
}
