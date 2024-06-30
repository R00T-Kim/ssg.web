const express = require("express");
const app = express();

app.get('/express', (req,res) => {
    res.send('<h1> Hello server!!</h1>');
});

app.listen(3000, () => {
    console.log('server onload');
})