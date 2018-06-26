const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
//falta conectar ao banco 

//Carrega os models
const Filme = require('./models/filme');
const Serie = require('./models/serie');
const Livro = require('./models/livro');
const Hq = require('./models/hq');
//Carrega as rotas
const indexRoute = require('./routes/index-route');
const filmeRoute = require('./routes/filme-route');
const serieRoute = require('./routes/serie-route');
const livroRoute = require('./routes/livro-controller');
const hqRoute = require('./routes/hq-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});



app.use('/', indexRoute);
app.use('/filmes', filmeRoute);
app.use('/series', serieRoute);
app.use('/livros', livroRoute);
app.use('/hqs', hqRoute);


module.exports = app;