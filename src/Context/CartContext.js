import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCcounter] = useState([]);

  function addToCart(id){
    setCartItems(id)
    
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
