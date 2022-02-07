import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevState) => [...prevState, { item, quantity }]);
  };

  const removeItem = (id) => {
    setCart((prevState) =>
      prevState.filter((element) => element.item.id !== id)
    );
  };

  const clearItems = () => {
      setCart([]);
  };

  const isInCart = (id) => {
      return cart.some((element)=> element.item.id === id)
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearItems, isInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
