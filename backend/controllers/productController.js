import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = (req, res) => {
  const keyword = req.query.keyword
  ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  : {};

  Product.find({ ...keyword })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(404).json({ message: 'products list not found' });
      console.log(err.message);
    });
};

const getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(404).json({ message: 'product not found' });
    });
};

export { getProducts, getProductById };
