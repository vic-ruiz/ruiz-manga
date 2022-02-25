import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((order)=>{
        if (order.item.id === item.id){
          return {...order, quantity: quantity + order.quantity}
        } else {
          return order
        }
      })
      setCart(updatedCart)
    } else{
      setCart((prevState) => [...prevState, { item, quantity }]);
    }
    
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
    return cart.some((element) => element.item.id === id);
  };

  const precioTotal = () => {
    return cart.length > 0
      ? cart
          .map((item) => item.item.price * item.quantity)
          .reduce((a, b) => a + b)
      : 0;
  };

  const cantidadItems = () => {
    return cart.length > 0
      ? cart.map((item) => item.quantity).reduce((a, b) => a + b)
      : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearItems,
        isInCart,
        cantidadItems,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
