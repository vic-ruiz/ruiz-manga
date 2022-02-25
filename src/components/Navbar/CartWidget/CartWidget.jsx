import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useEffect, useState } from "react";

export const CartWidget = () => {
  const { cantidadItems } = useCart();

  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setCantidad(cantidadItems())
  }, [cantidadItems])

  return (
    <Link to="/cart" className="cartWidget">
      <ShoppingCartIcon />
      <p>{cantidad}</p>
    </Link>
  );
};
