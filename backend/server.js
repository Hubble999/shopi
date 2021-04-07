import express from 'express';
import dotenv from 'dotenv';
import database from './config/database.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

database();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log('listen 5000'));
