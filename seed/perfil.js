const mongoose = require('mongoose');
const { connect } = require('../models');
const { Perfil } = require('../models/index');

const seedDataBase = async () => {
    await connect();

    const perfil = {
         dadosPessoais:{
            nome:"Rogerio",
            sobrenome:"Silva",
            idade:40
         }
    };

    await Perfil.create(perfil);
    console.log("Dados inseridos com sucesso!");

    mongoose.connection.close();
};

seedDataBase();