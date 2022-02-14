import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearItems, precioTotal, cantidad } = useCart();
  const navigate = useNavigate();

  if (cantidad !== 0) {
    return (
      <div>
        <div className="cartStyle">
          <p>Item</p>
          <p>Cantidad</p>
          <p>Precio</p>
          <p></p>
        </div>
        {cart.map((item) => (
          <div className="cartStyle" key={item.item.id}>
            <p>{item.item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.item.price * item.quantity}</p>
            <button onClick={() => removeItem(item.item.id)}>Eliminar</button>
          </div>
        ))}
        <div className="checkOut">
          <p>Precio Total</p>
          <p>{precioTotal} </p>
          <button onClick={clearItems}> Eliminar Todos los Items</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1> No hay Items en el carrito </h1>
      <button onClick={() => navigate(`/`)}> Home</button>
    </div>
  );
};

export default Cart;
