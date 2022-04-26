import "../styles/globals.css";
import React from "react";
import { CartHelper } from "../src/CartState";

function MyApp({ Component, pageProps }) {
  return <CartHelper>
    <Component {...pageProps} />
  </CartHelper>;
}

export default MyApp;
