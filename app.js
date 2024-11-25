const express = require('express');
const path = require('path');

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const { connect } = require('./models');

const app = express();
const porta = 3000;

//Config do EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routes
app.use('/pedidos', routerPedidos0);
app.use('/', routerPrincipal);

app.listen(porta, () => {
    connect();

    consolelog('Servidor ouvindo na porta ', porta);
})