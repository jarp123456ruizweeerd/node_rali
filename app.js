const express = require('express');
var hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

hbs.registerPartials(__dirname + '/views/partials', function (err) { });

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jesus Alberto',
        titulo: 'Aprendiendo Node'
    });
})


app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Jesus Alberto',
        titulo: 'Aprendiendo Node'
    })
});
 

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Jesus Alberto',
        titulo: 'Aprendiendo Node'
    })
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=> {
    console.log('Escuchando por el puerto ' + port )
})