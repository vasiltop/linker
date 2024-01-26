<script lang="ts">
	import { trpc } from '$lib/client';

	let greeting = 'waiting';

	async function data() {
		greeting = await trpc.greeting.query();
	}

	data();
</script>

<h1 class="text-3xl font-bold underline">{greeting}</h1>
