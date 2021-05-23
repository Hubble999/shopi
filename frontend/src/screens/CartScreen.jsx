import React from 'react';
import { Col, Row, ListGroup, Image, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addCart from '../actions/actionAddCart.js';
import removeCart from '../actions/actionRemoveCart.js';

const CartScreen = ({ location, match }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { id } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const amount = location.search ? Number(location.search.split('=')[1]) : 1;
      dispatch(addCart(id, amount));
    }
  }, [dispatch, id]);

  const handleRemoveItem = (id) => () => {
    dispatch(removeCart(id));
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <>
            <h3>Your cart is empty</h3>
            <Link to="/">Go Back</Link>
          </>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.amount}
                      onChange={(e) => dispatch(addCart(item.id, Number(e.target.value)))}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light" onClick={handleRemoveItem(item.id)}>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.amount, 0)}) items</h2>$
              {cartItems.reduce((acc, item) => acc + item.amount * item.price, 0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type="button" className="btn-block" disabled={cartItems.length === 0}>
                Payment
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default CartScreen;
