<script>
	import { each } from 'svelte/internal';
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
<Skjema />
