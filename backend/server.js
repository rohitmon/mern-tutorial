const express = require('express');
const dotenv = require('dotenv').config();
const router = require('./routes/goalRoutes');
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler }  = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT || 5000;

app.use('/api/goals', router);
app.use(errorHandler);


app.listen(port , () => console.log(`Server running on port ${port}`));