const nomeService = require('../service/nome.service');
const express = require('express');
const controller = express.Router();

controller.post('/cadastrarNome', (req, res) => {
    // #swagger.tags = ['Nomes']
    // #swagger.summary = ''
    // #swagger.description = 'Esta rota  é destinada para o cadastro de nomes '
    /* #swagger.parameters['dados'] = {
        in: 'body',
        description: 'nomes',
        schema: { $ref: '#/definitions/nomes'}
    }
    */
    res.send(nomeService.createNome(req.body).catch(err => {
        console.log('Ocorreu um erro:', err);
    }));
});

controller.get('/getNomes', async (req, res) => {
    // #swagger.tags = ['Nomes']
    // #swagger.summary = ''
    // #swagger.description = 'Esta rota é destinada a puxar os nomes cadastrados'
    res.send(await nomeService.getTodosOsNomes().catch(err => {
        console.log('Ocorreu um erro:', err);
    }));
});
controller.put('/updateNomes', (req, res) => {
     // #swagger.tags = ['Nomes']
    // #swagger.summary = ''
    // #swagger.description = 'Esta rota é destinada para atualizar os nomes já inseridos'
    // #swagger.parameters['nome'] = {description: ''}
    /* #swagger.parameters['dadosAtualizados'] = {
       in: 'body',
       description: 'nomes',
       schema: { $ref: '#/definitions/nomes'}
   }
   */
    res.send(nomeService.updateNomes(req.query, req.body).catch(err => {
        console.log('Ocorreu um erro ', err);
    }));
});
controller.delete('/deleteNomes', (req,res)=>{
    // #swagger.tags = ['Nomes']
    // #swagger.summary = ''
    // #swagger.description = 'Esta rota é destinada a deletar nomes já cadastrados'
    // #swagger.parameters['nome'] = {description: 'deletar nomes'}
    res.send(nomeService.deleteNomes(req.query).catch(err =>{
        console.log('Ocorreu um erro:', err);

    }));

})

module.exports = controller