const express = require('express');
const path = require('path');

const app = express();

//statics
app.use(express.static(path.resolve(__dirname, './public')));

//EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.listen(3000);