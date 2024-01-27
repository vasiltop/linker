<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/register' && $page.url.pathname !== '/login'}
	<Navbar />
{/if}
<slot />
