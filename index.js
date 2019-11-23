//dependencies
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

//express
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 5000 }, () => console.log(`El servidor esta corriendo http://localhost:5000${server.graphqlPath}`));
