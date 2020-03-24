const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

/**
    Rota / Recurso
 */

 /**
    Métodos HTTP
    GET: buscar uma informação do back-end
    POST:  criar uma informação no back-end
    PUT: alterar uma informação no back-end
    DELETE: deletar uma informação no  back-end
  */

  /**
    Tipos de parâmetros:

    Query params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
    Route params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requisição, utlizado para criar ou alterar recursos
   */

   /**
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Serer
    NoSQL: MongoDB, CouchDB, etc...
    */


app.listen(3333);