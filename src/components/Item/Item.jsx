import React from "react";
import "./Item.scss";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

export const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} xs={6} onClick={() => navigate(`/item/${product.id}`)}>
      <Card className="productosList">
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price} $</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
