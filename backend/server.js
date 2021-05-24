import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import database from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

database();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const __dirname = path.resolve();


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.listen(PORT, () => console.log('listen 5000'));
