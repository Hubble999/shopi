import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import actionProduct from '../actions/actionProduct.js';
import Loader from '../components/Loader';
import Warning from '../components/Warning';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(actionProduct(match.params.id));
  }, []);
  if (error) {
    return <Warning error={error} />
  }
  if (loading) {
    return <Loader />;
  }
  return (
    data && (
      <>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={data.image} alt={data.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{data.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={data.rating}
                  text={`${data.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${data.price}</ListGroup.Item>
              <ListGroup.Item>Description: {data.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${data.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {data.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={data.countInStock < 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    )
  );
};

export default ProductScreen;
