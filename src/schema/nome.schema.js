const mongoose = require('mongoose');

const nomeSchema = new mongoose.Schema({
    nome: { type: String },
    idade: { type: Number },
});

const nomeModel = mongoose.model('Nomezada', nomeSchema);

module.exports = nomeModel