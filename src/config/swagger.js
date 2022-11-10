const swaggerAutogen = require ('swagger-autogen')();
const outputFile = './doc/swagger_output.json';
const controllerFile = ['./src/controller/nome.controller.js'];

const doc = {
    info: {
        version  :"2.0.0",
        title: "API para cadastro de nomes",
        description: "API feita com destino ao estudo.",
    },
    host : "localhost:8000",
    basePath: "/renan",
    schemas: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    definitions: {
        nomes:{
            nome : "Renan",
            idade: 10,
        }
    },
};
swaggerAutogen(outputFile, controllerFile, doc).then(()=>{
    require('../index.js');
    
})
