export const GET_USERS = {
	query: `
		query allUsers {
			users {
				id
				firstName
				lastName
				email
			}
		}
	`,
};
