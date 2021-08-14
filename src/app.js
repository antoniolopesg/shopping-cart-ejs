const path = require('path');
const express = require('express');
const products = require('./mock.json');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const productsFormatted = products.map((product) => {
    const formattedPrice = Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(product.price);

    return { ...product, formattedPrice };
  });

  return res.render('pages/index', { products: productsFormatted });
});

app.use((req, res) => {
  return res.render('pages/404.ejs');
});

module.exports = app;
