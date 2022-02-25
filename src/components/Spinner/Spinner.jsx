import Col from "react-bootstrap/Col"
import ReactLoading from 'react-loading';

export const Spinner = () => {
  return (
  <Col xs={{ span: 8, offset: 4 }}>
    <ReactLoading type="spin" color="black" height={"20%"} width={"40%"} />
  </Col>
  );
};
