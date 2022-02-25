import { useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import "./ThankYou.scss";

export const ThankYou = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const selectedCollection = db.collection("orders");
    const selectedOrder = selectedCollection.doc(orderId);

    selectedOrder
      .get()
      .then((response) => {
        if (!response.exists) console.log("Invalid Product");
        setOrder({ id: response.id, ...response.data() });
      })
      .catch((error) => console.error(error));
  }, [orderId]);

  if (!order) return <Spinner />;
  return (
    <Container fluid="lg">
      <Row className="justify-content-center">
        <Col as="h1" xs={12} className="thankYou">
          {" "}
          Gracias por tu compra {order.buyer.name} !{" "}
        </Col>
        <Col xs={12} md={6}>
          <Table className="thankYou">
            <h2>Resumen de compra</h2>

            {order.items.map((element) => {
              return (
                <p key={element.item.id}>
                  {element.item.name} x {element.quantity}
                </p>
              );
            })}
            <p>Total {order.total}</p>
          </Table>
        </Col>
        <h3 className="thankYou">Su codigo de orden es {order.id}</h3>
        <Col xs={2} md={1}>
          <Button onClick={() => navigate(`/`)}> Home</Button>
        </Col>
      </Row>
    </Container>
  );
};
