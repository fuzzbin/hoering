<script>
	import Skjema from '../lib/components/Skjema.svelte';
	export let data;
	// console.log(data)
</script>

<h1>Høringer og innspill</h1>
<h2>
	Velkommen til Fiktiv kommune. Her finner du informasjon om saker som er ut på høring og du kan
	kommer med skriftlige innspill
</h2>
<div>Placeholder for filtreringsboks</div>
<h1>Testdata fra load()-modul: {data.message}</h1>

For-løkke som genererer "høringskort"

<button on:click={console.log('Trykk trykk!')}>Skriv Data</button>

<form method="POST">
	<label>
		Sak_id
		<input name="sak_id" type="text" />
	</label>
	<label>
		Tittel
		<input name="tittel" type="text" />
	</label>
	<label>
		Beskrivelse
		<input name="beskrivelse" type="text" />
	</label>
	<button>Send data</button>
</form>
