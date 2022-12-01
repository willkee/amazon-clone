const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const models = require("./db/models");

// Match any files with the .graphql extension
const typeDefs = loadFilesSync("**/*", { extensions: ["graphql"] });
// Match any files with the .resolvers.js extension
const resolvers = loadFilesSync("**/*", { extensions: ["resolvers.js"] });

const app = express();

let server;
async function startServer() {
	const schema = makeExecutableSchema({ typeDefs, resolvers });

	server = new ApolloServer({ schema, context: { models } });

	await server.start();
	server.applyMiddleware({ app, path: "/graphql" });
}

module.exports = { app, startServer };
