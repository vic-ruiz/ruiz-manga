import React from "react";
import "./Navbar.scss";
import brand from "./brand.svg";
import { CartWidget } from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";

export const Navbar = () => {
  return (
    <Container fluid className="containerNav" >
      <Row className="rowNav" as="navbar">
        <Col xs={2} sm={3} md={1}>
        <Link to="/" className="brandContainer">
          <img src={brand} className="brandLogo" alt="logo marca de zapatillas"/>
        </Link>
      </Col>
      <Col xs={9} sm={6} md={9}>
        <ul className="box">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/1">Yeezy</Link>
          </li>
          <li>
            <Link to="/category/2">Jordan</Link>
          </li>
        </ul>
      </Col>
      <Col xs={1} sm={3} md={2}>
        <CartWidget />
      </Col>

      </Row>
      
    </Container>
  );
};