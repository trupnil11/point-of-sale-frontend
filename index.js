//const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//public folder css and js call
app.use(express.static(__dirname + '/public'));
//Routing start
app.get('/about', function (req, res, next) {
 return res.render('about');
});
//
app.get('/addcategory', function (req, res, next) {
    return res.render('addcategory');
});
//
app.get('/dashboard', function (req, res, next) {
    return res.render('index');
});
//
app.get('/table', function (req, res, next) {
    return res.render('table');
});
//
app.get('/form', function (req, res, next) {
  return res.render('form');
});
//
app.get('/add-product', function (req, res, next) {
    return res.render('item');
});
//
app.get('/product-listing', function (req, res, next) {
 return res.render('product');
});

//this route for order

app.get('/orders', function (req, res, next) {
   return res.render('order');
});
//
app.get('/category-listing', function (req, res, next) {
    return res.render('listing');
});
//
app.get('/', function (req, res, next) {
  return res.render('signin');
});
//
app.get('/signup', function (req, res, next) {
    return res.render('signup');
});
//
app.get('/', function (req, res, next) {
    return res.render('add category');
});

//Server listen
app.listen(1000, () => {
    console.log(`my node project is running on port no 1000`);
});