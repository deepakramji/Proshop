import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../Components/Product"

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((prd) => (
          <Col sm={12} md={9} lg={4} xl={3}>
            <Product product={prd}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
