<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="grid place-items-center w-full h-full">
	<form method="post" class=" flex flex-col gap-2 content p-16">
		<h2 class=" text-3xl font-bold text-center">Login</h2>

		{#if form?.message}
			<div class=" text-red-400">{form.message}</div>
		{/if}
		<div
			class="flex flex-col gap-2 border-b-2 border-gray-600 py-2 border-opacity-50"
		>
			<p class="  text-sm">Username</p>
			<input
				type="text"
				class="input border-[1px] text-secondary-content place-secondary"
				name="username"
				placeholder="Username"
			/>

			<p class="  text-sm">Password</p>
			<input
				type="password"
				name="password"
				class="input border-[1px]"
				placeholder="Password"
			/>

			<button type="submit" class="btn"> Log In </button>
		</div>
		<p class="text-xs">
			Don't have an account? <a href="/register" class="font-bold underline">
				Sign up</a
			>
		</p>
	</form>
</div>
