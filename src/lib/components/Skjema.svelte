<script>
	import Editor from '@tinymce/tinymce-svelte';
</script>

<div class="Skjema_div">
	<input type="text" placeholder="fornavn" />
	<input type="text" placeholder="etternavn" />
	<Editor />
</div>

<style>
	.Skjema_div {
		width: 50%;
		background-color: blueviolet;
	}
</style>
