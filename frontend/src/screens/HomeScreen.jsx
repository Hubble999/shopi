import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((prod) => {
          return (
            <Col sm={12} lg={4} xl={3} md={6}>
              <Product product={prod} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
