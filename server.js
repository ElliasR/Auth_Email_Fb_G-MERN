const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//config .env from ./config/config.env
require('dotenv').config({ path: './config/config.env' });

const app = express();

//config for only development
if (process.env.NODE_ENV === 'development') {
  app.use(
    //cors: helps dealing with the localhost for react.
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan('dev')); // MORGAN gives information about each request
}

//Load all routes
const authRouter = require('./routes/auth.route');

//Use Routes
app.use('/api/', authRouter);

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
