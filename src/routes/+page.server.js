import { dbConnect, dbDisconnect } from '../utils/db';
import { Sak } from '../models/saker';

export const load = async () => {
	console.log("Siden lastet på nytt!")
};

export const actions = {
  default: async (event) => {
    // TODO log the user in
    console.log("Her kommer dataene")
	await dbConnect();
	console.log('Hey hey!');

	const nySak = new Sak({
		sak_id: 'xxxx',
		tittel: 'yyyy',
		beskrivelse: 'zzz'
	});

	nySak.save().then(() => console.log('meow!!!!!'));

	await dbDisconnect();
	console.log('Ho ho!');
	return {
		message: 'Her kommer høringene'
	};
  }
};
