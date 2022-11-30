const express = require("express");

const { ApolloServer, AuthenticationError } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const app = express();

app.use(cors());

app.use(morgan("dev"));

// Match any files with the .graphql extension
const typeDefs = loadFilesSync("**/*", { extensions: ["graphql"] });
// Match any files with the .resolvers.js extension
const resolvers = loadFilesSync("**/*", { extensions: ["resolvers.js"] });
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: "/graphql" });

// GraphQL requires only one endpoint
// We use query type to "get" or mutation type to "post", "put/patch", or "delete"
// app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

module.exports = app;
