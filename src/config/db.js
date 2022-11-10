const mongoose = require("mongoose");

function mongoConnection() {
    mongoose.connect("mongodb://localhost:27017/nome").then(() =>{
        console.log('Conectado!');
    }).catch(err =>{
        console.log("Deu ruim!",err);

    })

};
module.exports= mongoConnection