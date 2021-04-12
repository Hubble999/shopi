import Product from '../models/productModel.js';

const getProducts = (req, res) => {
  Product.find({})
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
export {
  getProducts,
  getProductById,
};
