import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from '../components/Rating';

const Product = ({ product }) => {
  const { name, image, brand, price, rating, _id } = product;
  return (
    <Card className="my-3 rounded">
      <Link to={`/product/${_id}`} style={{ padding: '0px' }}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text>{brand}</Card.Text>
        <Rating value={rating} />
        <LinkContainer to="/product">
          <Button className="my-2">${price}</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default Product;
