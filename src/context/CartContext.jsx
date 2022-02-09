import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [cantidad, setCantidad] = useState(0)

  const [precioTotal, setPrecioTotal] = useState(0)

  const addItem = (item, quantity) => {
    setCart((prevState) => [...prevState, { item, quantity }]);
    setCantidad((prev)=> prev + quantity)
    setPrecioTotal((prev)=>prev + item.price*quantity)
  };

  const removeItem = (id) => {
    const resta= cart.find(element => element.item.id === id);
    setCart((prevState) =>
      prevState.filter((element) => element.item.id !== id)
    );
    setCantidad((prev)=> prev - resta.quantity)
    setPrecioTotal((prev)=> prev - resta.quantity * resta.item.price)
    
  };
  

  const clearItems = () => {
      setCart([]);
      setCantidad(0)
      setPrecioTotal(0)
  };

  const isInCart = (id) => {
      return cart.some((element)=> element.item.id === id)
  };


  return (
    <CartContext.Provider value={{ cart,cantidad,precioTotal, addItem, removeItem, clearItems, isInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
