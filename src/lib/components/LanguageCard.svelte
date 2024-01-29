<script lang="ts">
	export let name: string;
	export let description: string;
</script>

<div class=" border-neutral border-[1px] bg-base-100 rounded-md p-4">
	<a href="/" class="text-2xl font-bold underline hover:text-neutral">{name}</a>

	<p class="text-xs py-2">{description}</p>
</div>
