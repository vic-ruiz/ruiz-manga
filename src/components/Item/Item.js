import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.css";
import { useNavigate } from "react-router-dom";

export const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="productosList"
      onClick={() => navigate(`/item/${product.id}`)}
    >
      <h1>{product.name} </h1>
      <p>{product.price} $ </p>
    </div>
  );
};
