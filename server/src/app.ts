import express from 'express';
// import { userController } from './routes/users';

export const app = express();

// app.use('/users', userController);

app.use('/', (req, res) => {
    res.send('Hello world!');
});
