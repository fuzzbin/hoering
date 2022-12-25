import { saker } from '../db/saker.js';

export async function load({ data, fetch }) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();
	return {
		age: 48,
		users: users
	};
}
