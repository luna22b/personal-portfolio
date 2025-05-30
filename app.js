const express = require("express");
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/about', (req, res) => {    
    res.render('about');
});

app.get('/contacts', (req, res) => {
    res.render('contact');
});

app.get('/skills', (req, res) => {  
    res.render('skills');
});

app.get('/projects', (req, res) => {  
    res.render('projects');
});

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}`);
});
