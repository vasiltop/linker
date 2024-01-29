<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Language } from '$lib/server/schema';
	import { trpc } from '$lib/client';

	let data: Language | undefined;

	onMount(async () => {
		data = await trpc.language.getOne.query($page.params.id);
	});
</script>

<!--{$page.params.id}-->

<div class="grid place-items-center p-8">
	<div class=" max-w-5xl content w-full prose">
		{#if data}
			<h1>
				{data.name}
			</h1>

			<p>{data.description}</p>
		{/if}
	</div>
</div>
