<script lang="ts">
	import { trpc } from '$lib/client';

	let name = '';
	let description = '';

	async function createLanguage() {
		await trpc.language.create.mutate({
			name,
			description,
		});
	}
</script>

<div class="grid place-items-center w-full h-full">
	<form
		method="post"
		class=" flex flex-col gap-4 content p-8"
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

		<button type="submit" class="btn"> Create </button>
	</form>
</div>
