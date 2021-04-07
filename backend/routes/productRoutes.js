import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/', (req, res) => {
  Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err.message));
});
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch(() => {
      res.status(404).json({ message: 'product not found' });
    });
});

export default router;
