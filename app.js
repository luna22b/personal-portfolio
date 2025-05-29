const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}`);
})