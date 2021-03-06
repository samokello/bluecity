import Head from "next/head";
import Nav from "../src/components/Nav";
import axios from "axios";
import Categories from "../src/components/Categories";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProductContext from "../src/ProductState";
import { useEffect, useState, useContext } from "react";
import BluecityContext from "../src/bluecityState";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SliderSection from "../src/components/SliderSection";
import Footer from "../src/components/Footer";
import { useRouter } from "next/router";
import { border } from "@mui/system";


const WhatsappContainer = styled.div`
  .whatsapp_float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    transition: ease background-color 250ms;
    &:hover {
      transform: translate(-20%, 20%);
      transition: 0.1s ease-in;
    }

    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
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

const Container = styled.div`
  width: 80%;
  border: 2px solid darkgrey;
  margin: 2em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 2px;
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

const OfferContainer = styled.div`
  width: 100%;
  flex-direction: row;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Offer = styled.div`
  color: #fff;
  display: flex;
  width: 80%;
  margin:0 auto
`;

const Offerdiv = styled.div`
  text-align: center;
  color: #fff;
  background: green;
  width: 20%;
  margin: 1em;
  border-radius: 5px;
`;
const OfferIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

// const [darktheme,setDarkTheme]=useState(true)
//   const [theme,setTheme]=useState({
//         primaryColor:"#1F1D36",
//         secondaryColor:"#302D4E",
//         text:"#fff"
//   })

export default function Home() {
const [loading, setLoading]=useState(false);
  const [products, setProducts] = useState();
  const [productlist, setProductlist] = useState([]);
  const { cartState, productState, categoryState } =
    useContext(BluecityContext);
  const [cart, setCart] = cartState;
  const router = useRouter();
  const [category, setCategory] = categoryState;

  const url = "http://localhost:8000/api/products";

  // const url="https://immense-peak-73012.herokuapp.com/api/products"
  useEffect(
    (item) => {
      axios.get(url).then((res) => {
        setProductlist(res.data);
      });
    },
    [url]
  );

  const categoryHandler = (e) => {
    router.push("/ProductsPage");
    const categoryData = e.target.innerText.toLowerCase();

    setCategory(categoryData);
  };

  const handleClick = (e, cartItem) => {
    if (e.target.innerText === "Add to cart") {
      setCart([...cart, cartItem]);
      e.target.innerText = "Added to cart";
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blue city investment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200;500;700&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Nav />
      <SliderSection />
      <Categories categoryHandler={categoryHandler} />

      <h1 style={{ textAlign: "center" }}>Hot This Month</h1>
      <div style={{ display: "flex", width: "80%", margin: "0 auto" }}>
        {productlist.slice(15, 20).map((item) => {
          return (
            <OfferContainer>
              <Container>
                <Image src={item.image} />
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  {item.name}
                </p>

{/* {loading ? productlist : <ReactBootStrap.Spinner animation="border"/>} */}
                <div style={{ display: "flex" }}>
                  <Hotbutton
                    className="shop-btn"
                    // onClick={(e)=>handleCheckout()}
                  >
                    Shop now
                  </Hotbutton>

                  <Hotbutton
                    onClick={(e) => handleClick(e, item)}
                    className="addtocart"
                  >
                    {cart.some((cartItem) => cartItem._id === item._id)
                      ? "Added to cart"
                      : "Add to cart"}
                  </Hotbutton>
                </div>
              </Container>
            </OfferContainer>
          );
        })}
      </div>

      <h2 style={{ textAlign: "center", fontSize: "3rem", margin: ".5em" }}>
        Products on offer
      </h2>
      <Offer>
        {productlist.map((item) => {
          if (item.onOffer.toLowerCase() === "true") {
            return (
              <div
                style={{
                  width: "30%",
                  border: "1px solid darkgrey",
                  margin: "1em",
                  borderRadius: "5px",
                }}
              >
                <Offerdiv>
                  <p>
                    {" "}
                    -{" "}
                    {Math.floor(
                      ((item.regularprice - item.salesprice) /
                        item.regularprice) *
                        100
                    )}
                    %
                  </p>
                </Offerdiv>

                <img
                  src={item.image}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    height: "400px",
                    padding: "2em",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "2em",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      textDecoration: "line-through",
                      color: "red",
                    }}
                  >
                    Ksh: {item.regularprice}
                  </p>
                  <p style={{ fontSize: "1.5rem", color: "green" }}>
                    Ksh: {item.salesprice}
                  </p>
                </div>

                <OfferIcons>
                  <Hotbutton
                    className="shop-btn"
                    // onClick={(e)=>handleCheckout()}
                  >
                    Shop now
                  </Hotbutton>

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
                      style={{
                        color: "red",
                        fontSize: "3rem",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </OfferIcons>
              </div>
            );
          }
        })}
      </Offer>

      <Link href={"/ProductsPage"}>
        <div
          style={{ padding: ".5em", display: "flex", justifyContent: "end" }}
        >
          <button
            style={{
              padding: "1em",
              background: "maroon",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer ",
              borderRadius: "5px",
              width: "10%",
            }}
          >
            Shop More
          </button>
        </div>
      </Link>

      <Footer />
      <WhatsappContainer>
        <a
          href="https://wa.me/254726964415"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            style={{
              width: "55",
              height: "55",
              background: "#25d366",
              borderRadius: "50%",
             
            }}
          />
        </a>
      </WhatsappContainer>


    </div>
  );
}
