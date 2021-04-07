import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import database from './config/database.js';

dotenv.config();

database();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => console.log('listen 5000'));
