import { createContext, useState } from 'react';

const CartContext = createContext()

export const CartHelper = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;