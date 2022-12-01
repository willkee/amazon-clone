import { gql } from "graphql-request";

export const GET_USERS = gql`
	query allUsers {
		users {
			id
			firstName
			lastName
			email
			type
		}
	}
`;
