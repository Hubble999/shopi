import express from 'express';
import {
  getProducts,
  getProductById,
  getTopProducts
} from '../controllers/productController.js';

const router = express.Router();

router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.get('/', getProducts);

export default router;
