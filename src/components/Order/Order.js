import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase/index";
import "./Order.css"

export const Order = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { cart, precioTotal } = useCart();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!name || !phone || !email.includes("@")){
        console.log("Llenar campos")
        return false
    }

    const newOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: precioTotal,
      };


      const db = getFirestore();
      db.collection('orders')
        .add(newOrder)
        .then((res)=>{
            navigate(`/thanks/${res.id}`)
        })
        .catch((err)=>console.log("hubo un error", err))

  };

  

  return (
    <div className="formulario">
      <h1>Completa el formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone"></label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="xxx-xxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Confirmar Compra" />
      </form>
    </div>
  );
};
