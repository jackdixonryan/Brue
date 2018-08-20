const express = require('express');
const bars = require('express-handlebars');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 8080;

app.engine('handlebars', bars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'Gl0rf1&d3l',
    database: 'brue_db'
});

connection.connect();

app.get('/addGrain', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log('listening on PORT ' + PORT);
});