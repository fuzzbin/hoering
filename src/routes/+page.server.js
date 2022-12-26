import { dbConnect, dbDisconnect } from '../utils/db';
import { Sak } from '../models/saker';

export const load = async () => {
	console.log('Siden lastet på nytt!');
};

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const t = data.get('tittel');
		const b = data.get('beskrivelse');
		console.log(t, b);

		// Lagring til DB
		await dbConnect();
		console.log('Hey hey!');

		const nySak = new Sak({
			sak_id: 'xxxx',
			tittel: t,
			beskrivelse: b
		});

		nySak.save().then(() => console.log('meow!!!!!'));

		await dbDisconnect();
		console.log('Ho ho!');
		return {
			message: 'Her kommer høringene',
			success: true
		};
	}
};
