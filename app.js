const express = require('express');
const app = express();
const path  = require('path');
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate)

app.get('/', (req, res)=>{
    res.render('layout/home')
})
app.get('/projects', (req, res)=>{
    res.render('layout/projects')
})
app.get('/about', (req, res)=>{
    res.render('layout/about')
})
app.get('/contact', (req, res)=>{
    res.render('layout/contact')
})

app.get('/contact/success', (req, res)=>{
    res.render('layout/success')
})

app.listen(9004, ()=>{
    console.log('listening to 9004');
})
