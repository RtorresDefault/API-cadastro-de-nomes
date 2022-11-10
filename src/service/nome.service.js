const nomeModel = require('../schema/nome.schema');

const nomeService = {
    createNome:(dados)=>{
        return nomeModel.create(dados);
    },
      getTodosOsNomes:()=>{
        return nomeModel.find();
      },
      updateNomes: (dados, nome) =>{
        return nomeModel.updateOne(nome, dados, )
      },
      deleteNomes: (nome)=>{
        return nomeModel.deleteOne(nome);
      }
}
module.exports = nomeService;