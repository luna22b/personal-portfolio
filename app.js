const express = require("express");
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html' , 'main.css'));
});

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}`);
})