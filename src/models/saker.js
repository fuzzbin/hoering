import mongoose from 'mongoose';

const SakerSchema = new mongoose.Schema({
	sak_id: String,
	tittel: String,
	beskrivelse: String
});

export const Sak = mongoose.model('Sak', SakerSchema);
