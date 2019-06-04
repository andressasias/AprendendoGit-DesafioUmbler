const express = require('express');
const app = express();
const pug = require('pug');

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Listening on 3000');
})