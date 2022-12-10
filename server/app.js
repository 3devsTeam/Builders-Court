const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const indexRouter = require('./routes/index');
const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./utils/errorController');

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));
app.use(globalErrorHandler);
app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}
app.use('/api', indexRouter);

module.exports = app;