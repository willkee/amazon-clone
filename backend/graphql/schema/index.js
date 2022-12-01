const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Query {
		users: [User]!
	}

	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		type: String!
	}
`;

module.exports = typeDefs;
