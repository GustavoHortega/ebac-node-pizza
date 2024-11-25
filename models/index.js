const mongoose =  require('mongoose');
const pedidoSchema = require('./pedido');

const Pedido = mongoose.model('Pedido', pedidoSchema)

const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/ebacpizza')
}

module.exports = {
    connect,
    Pedido,
}