import dotenv from 'dotenv';
import products from './data/products.js';
import users from './data/users.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/database.js';

dotenv.config();

connectDB();

const importData = () => {
  const orderDelete = Order.deleteMany();
  const productDelete = Product.deleteMany();
  const userDelete = User.deleteMany();

  return Promise.all([orderDelete, productDelete, userDelete])
    .then(() => User.insertMany(users))
    .then((createdUsers) => {
      const adminUser = createdUsers[0]._id;
      const sampleProducts = products.map((product) => ({
        ...product,
        user: adminUser,
      }));
      return Product.insertMany(sampleProducts);
    })
    .catch((err) => console.log(err.message));
};
const deleteData = () => {
  const orderDelete = Order.deleteMany();
  const productDelete = Product.deleteMany();
  const userDelete = User.deleteMany();

  return Promise.all([orderDelete, productDelete, userDelete]).catch((err) =>
    console.log(err),
  );
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
