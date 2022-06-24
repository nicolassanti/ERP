 require('dotenv').config()
 const express = require('express');
 const path = require('path');
 const cookieParser = require('cookie-parser');
 const logger = require('morgan');

 const productsRouter = require('./routes/products.routes');
 const supliersRouter = require('./routes/supliers.routes');
 const usersRouter = require('./routes/users.routes');
 const authsRouter = require('./routes/auth.routes');
 const filesRouter = require('./routes/files.routes');
 const configsRouter = require('./routes/configs.routes');

 const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', productsRouter);
app.use('/supliers', supliersRouter);
app.use('/users', usersRouter);
app.use('/auth', authsRouter);
app.use('/files', filesRouter);
app.use('/configs', configsRouter);



module.exports = app;
