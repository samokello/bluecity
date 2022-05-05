import { createContext, useState } from 'react';

const BluecityContext = createContext()

export const BluecityHelper = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <BluecityContext.Provider value={{productState:[products, setProducts], cartState:[cart, setCart]}}>
      {children}
    </BluecityContext.Provider>
  );
};

export default BluecityContext;