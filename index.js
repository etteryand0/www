const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
  console.log('Server running on localhost:3030')
});