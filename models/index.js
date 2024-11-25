const mongoose =  require('mongoose');
const Pedido = require('./pedido');

const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/ebacpizza')
}

module.exports = {
    connect,
    
    Pedido
}