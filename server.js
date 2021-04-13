const express = require('express');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./models/db');

require('dotenv').config({ path: './config/config.env' });

const app = express();
app.use(express.json()); //replaces deprecated bodyParser

//DB connect
connectDB();

//config for only development--> disabbled, not working now...
//if (process.env.NODE_ENV === 'development node server') {
app.use(
  //cors: helps dealing with the localhost for react.
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(morgan('dev')); // MORGAN gives information about each request
//}

//Load all routes
const authRouter = require('./routes/auth.route');

//Use Routes
app.use('/api', authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Page not found',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
