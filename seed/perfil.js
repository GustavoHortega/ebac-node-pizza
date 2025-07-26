const mongoose = require('mongoose');
const { connect } = require('../models');
const { Perfil } = require('../models/index');

const seedDataBase = async () => {
    await connect();

    // await Perfil.deleteMany();
    console.log("Dados deletados com sucesso!");

    const perfil = {
         dadosPessoais:{
            nome:"Vitorinha",
            sobrenome:"Conde",
            idade:21
         }
    };

    await Perfil.create(perfil);
    console.log("Dados inseridos com sucesso!");
    mongoose.connection.close();

};

seedDataBase();