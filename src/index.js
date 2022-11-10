const port = 8000;
const mongoConnection = require('./config/db');
const express = require ('express');
const app = express();
const nomeController = require('./controller/nome.controller')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require ('../doc/swagger_output.json');


mongoConnection();
app.use(express.json());
app.use('/renan/doc',  swaggerUi.serve,swaggerUi.setup(swaggerFile) );
app.use('/renan', nomeController);
app.listen(port, ()=>{
    console.log(`ouvindo a porta ${port}\nA documentação está http://localhost:${port}/renan/doc` )
});