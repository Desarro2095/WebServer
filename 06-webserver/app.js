require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;
const param = {
    name: 'Carlos Pacheco',
    title: 'Node JS',
    routes: {
        home: '/',
        generic: '/generic',
        elements: '/elements'
    }
}

//TODO: require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

// Servir contenido estatico
app.use(express.static('public', { extensions: ['html'] }));

app.get('/', (req, res) => {
    res.render('home', param);
});

app.get('/generic', (req, res) => {
    res.render('generic', param);
});

app.get('/elements', (req, res) => {
    res.render('elements', param);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World from get custom');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/Error.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});