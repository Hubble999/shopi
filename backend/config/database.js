import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`connected DB ${connect.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};
export default connectDB;``
