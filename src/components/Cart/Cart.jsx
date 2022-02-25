import { useCart } from "../../context/CartContext";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Cart = () => {
  const {
    cart,
    removeItem,
    clearItems,
    precioTotal,
    cantidadItems,
  } = useCart();
  const navigate = useNavigate();

  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    setPrecio(precioTotal());
  }, [precioTotal]);

  if (cantidadItems() !== 0) {
    return (
      <Container className="containerCart">
        <Row className="justify-contenr-center itemCart mb-2">
          <Col as="p" xs={3}>
            Item
          </Col>
          <Col as="p" xs={3}>
            Cantidad
          </Col>
          <Col as="p" xs={3}>
            Precio
          </Col>
        </Row>
        {cart.map((item) => (
          <Row className="productCart" key={item.item.id}>
            <Col as="p" xs={3}>
              {item.item.name}
            </Col>
            <Col as="p" xs={3}>
              {item.quantity}
            </Col>
            <Col as="p" xs={3}>
              {item.item.price * item.quantity}
            </Col>
            <Col as="p" xs={3}>
              <Button variant="light" onClick={() => removeItem(item.item.id)}>
                Eliminar
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="checkOut">
          <Col as="p" xs={6}>
            Precio Total
          </Col>
          <Col as="p" xs={3}>
            {precio}{" "}
          </Col>
          <Col as="p" xs={3}>
            <Button variant="danger" onClick={clearItems}>
              {" "}
              Eliminar Todos los Items
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={() => navigate(`/order`)}>
              {" "}
              Finalizar Compra
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container fluid >
      <Row className="justify-content-center">
        <Col xs={8}  >
          <h1> No hay Items en el carrito, toque el boton para seguir comprano</h1>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs={1} md={1}>
          <Button onClick={() => navigate(`/`)}> Home</Button>
        </Col>
        </Row>
    </Container>
  );
};

export default Cart;
