const mongoose =  require('mongoose');
const pedidoSchema = require('./pedido');
const perfilSchema = require('./perfil');

const Pedido = mongoose.model('Pedido', pedidoSchema)
const Perfil = mongoose.model('Perfil', perfilSchema)

const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/ebacpizza')
}

module.exports = {
    connect,
    Pedido,
    Perfil,
}