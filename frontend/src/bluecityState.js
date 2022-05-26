import { createContext, useState } from "react";

const BluecityContext = createContext();

export const BluecityHelper = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  return (
    <BluecityContext.Provider
      value={{
        productState: [products, setProducts],
        cartState: [cart, setCart],
        categoryState: [category, setCategory],
      }}
    >
      {children}
    </BluecityContext.Provider>
  );
};

export default BluecityContext;
