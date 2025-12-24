import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])

  function addToCart(product){
    setCartItems((prev)=>{
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    })
  }

  function totalPrice(){
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  }
   function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalPrice,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
