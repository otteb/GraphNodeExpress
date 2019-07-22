/*jshint esversion: 6 */
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL schema:
var schema = buildSchema(`
    type Query {
      message: String
    }
  `);

//Root Resolver
var root = {
  //each of these items are called actions:
  message: () => 'Hello World!'
};

//Create an express server anda  graphql endpoint:
var app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

//express-specific listen on port (4000)
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost: 4000/graphql'));
