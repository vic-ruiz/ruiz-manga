import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Card, Container, ListGroup, Row, Col, Button } from "react-bootstrap";

export const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useCart();

  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  const addItemHandle = () => {
    addItem(item, counter);
  };

  const sumar = () => {
    if (item.stock > counter) setCounter((prevState) => prevState + 1);
  };

  const restar = () => {
    if (counter > 1) setCounter((prevState) => prevState - 1);
  };
  return (
    <Container>
      <Row className="detailRow">
        <Col xs={10} sm={8} md={6} lg={6}>
          <Card.Img variant="top" src={item.img} />
        </Col>
        <Col xs={10} sm={8} md={6} lg={6}>
          <Card className="itemDetail">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Precio : {item.price} $</ListGroup.Item>
              <ListGroup.Item>Cantidad : {counter}</ListGroup.Item>
              <ListGroup.Item>
                <ItemCount restar={restar} sumar={sumar} />
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {isInCart(item.id) ? (
                <div>
                  <h3> El item ya se encuentra en el carrito de compras : )</h3>

                  <Link to="/cart">
                    <Button variant="success">Finalizar Compra </Button>
                  </Link>

                  <Button variant="danger" onClick={addItemHandle}>
                    {" "}
                    Agregar mas unidades
                  </Button>

                  <Button onClick={() => navigate(`/`)}> Seguir Comprando</Button>
                </div>
              ) : (
                <Button variant="primary" onClick={addItemHandle}>
                  {" "}
                  Agregar a Carrito de Compra
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
