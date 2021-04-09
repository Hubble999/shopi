import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import actionProductList from '../actions/actionProductList.js';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Warning from '../components/Warning';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(actionProductList());
  }, []);
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Warning error={error} />
  }
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {data.map((prod) => {
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
