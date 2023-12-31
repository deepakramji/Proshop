import { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, []);
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
