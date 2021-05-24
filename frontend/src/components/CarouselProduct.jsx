import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Warning from './Warning';
import productTopAction from '../actions/productTopAction';

const CarouselProduct = () => {
  const dispatch = useDispatch();

  const productTop = useSelector((state) => state.productTop);
  const { error, data } = productTop;

  useEffect(() => {
    dispatch(productTopAction());
  }, [dispatch]);

  return error ? (
    <Warning error={error}></Warning>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {data.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h4>
                {product.name} (${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselProduct;
