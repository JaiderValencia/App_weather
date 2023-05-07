const express = require('express');
const path = require('path');

const app = express();

//routes require
const mainRoutes = require('./routes/mainRoutes');

//statics
app.use(express.static(path.resolve(__dirname, './public')));

//EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

//use routes
app.use('/', mainRoutes)

app.listen(3000);