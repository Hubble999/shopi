import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Warning from '../components/Warning';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {error && <Warning error={error} />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer?{' '}
              <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
