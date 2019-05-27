const express = require('express');
const app = express();
var hbs = require('hbs');
require('./helpers/gral');

//Trae el puerto para heroku
const port = process.env.PORT || 3000;

//hbs para utilizar el render
app.set('view engine', 'hbs');

//Hacemos publica la carpeta y su contenido
app.use(express.static(__dirname + '/public'));

//Carpeta de vistas generales (parciales)
hbs.registerPartials(__dirname + '/views/parciales');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'diana magdiel vazquez'
    });
})


app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'fernando udemy'
    });
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});