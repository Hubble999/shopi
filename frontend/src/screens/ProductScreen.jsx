import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import actionProduct from '../actions/actionProduct.js';
import Loader from '../components/Loader';
import Warning from '../components/Warning';

const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.productDetails);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    dispatch(actionProduct(match.params.id));
  }, [dispatch]);

  const addCartHandler = () => {
    history.push(`/cart/${match.params.id}?amount=${amount}`);
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Warning error={error} />;
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
                  <Row>
                    <Col>Amount:</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        size='sm'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      >
                        {[...Array(data.countInStock).keys()].map((num) => (
                          <option key={num}>{num + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Button
                    className='btn-block'
                    type='button'
                    disabled={data.countInStock <= 0}
                    onClick={addCartHandler}
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
