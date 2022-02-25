import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

export const Footer = () => {

  return (
    <Container fluid className="containerFooter" as="footer">
      <Row>
        <Col md={4} sm={6}>
          <h4>SneakersShop</h4>
          <p>Buy the hottest sneakers including Adidas Yeezy and Retro Jordans.</p>
        </Col>
        <Col md={4}>
          <h4>Redes Sociales</h4>
          <ul>
            <a href="#!"><li>Instagram</li></a>
            <a href="#!"><li>Facebook</li></a>
            <a href="#!"> <li>Twitter</li></a>
           
          </ul>
        </Col>
        <Col md={4}>
          <h4>Contact</h4>
          <ul>
            <li>name@example.com</li>
            <li>Direccion 123</li>
            <li>+54123456789</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
