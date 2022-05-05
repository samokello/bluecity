import "../styles/globals.css";
import React from "react";
import { BluecityHelper } from "../src/bluecityState";

function MyApp({ Component, pageProps }) {
  return <BluecityHelper>
    <Component {...pageProps} />
  </BluecityHelper>;
}

export default MyApp;
