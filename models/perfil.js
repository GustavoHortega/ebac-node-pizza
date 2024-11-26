const { Schema } = require('mongoose');

const Perfil = new Schema({
    dadosPessoais:{
        nome:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required: true
        },
        idade:{
            type: Number,
            required: true
        }
    }
});

module.exports = Perfil;