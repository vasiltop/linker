<script lang="ts">
	import { trpc } from '$lib/client';
	import showdown from 'showdown';

	const converter = new showdown.Converter();
	let name = '';
	let description = '';
	let markdown = '';

	async function createLanguage() {
		await trpc.language.create.mutate({
			name,
			description,
			markdown,
		});
	}
</script>

<div class="grid px-24 py-8 w-full h-full grid-cols-2 gap-4">
	<form
		method="post"
		class=" flex flex-col gap-4 content p-8 items-center"
		on:submit|preventDefault={createLanguage}
	>
		<h2 class=" text-3xl font-bold text-center">Add a language!</h2>

		<input
			type="text"
			placeholder="Name"
			name="name"
			class="input"
			bind:value={name}
		/>

		<textarea
			placeholder="Description"
			class="textarea !border-gray-600 !outline-none resize-none"
			name="description"
			bind:value={description}
		/>

		<textarea
			placeholder="Markdown summary of your language."
			class="textarea !border-gray-600 !outline-none resize-none w-full h-full"
			name="markdown"
			bind:value={markdown}
		/>

		<button type="submit" class="btn"> Create </button>
	</form>

	<div class="content p-8 h-full w-full">
		<h1 class="text-3xl font-bold text-center">Markdown Preview:</h1>

		<div class="prose">
			{@html converter.makeHtml(markdown)}
		</div>
	</div>
</div>
