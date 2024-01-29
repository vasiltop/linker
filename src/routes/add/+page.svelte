<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="grid place-items-center w-full h-full">
	<form method="post" class=" flex flex-col gap-4 content p-8">
		{#if form?.message}
			<div class=" text-red-400">{form.message}</div>
		{/if}

		<h2 class=" text-3xl font-bold text-center">Add a language!</h2>

		<input type="text" placeholder="Name" name="name" class="input" />
		<textarea
			placeholder="Description"
			class="textarea !border-gray-600 !outline-none resize-none"
			name="description"
		/>

		<button type="submit" class="btn"> Create </button>
	</form>
</div>
