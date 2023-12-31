import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

const dbUrl = 'mongodb://127.0.0.1:27017/Trihandaru';

mongoose.connect(dbUrl)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });