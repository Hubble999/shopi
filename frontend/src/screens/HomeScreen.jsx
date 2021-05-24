import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import actionProductList from '../actions/actionProductList.js';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Warning from '../components/Warning';
import Carousel from '../components/CarouselProduct';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(actionProductList(keyword));
  }, []);

  return (
    <>
      {!keyword ? (
        <Carousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Warning error={error}></Warning>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
