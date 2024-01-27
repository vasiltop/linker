<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class=" p-4 border-b-neutral border-b-[1px] grid place-items-center">
	<div class=" max-w-7xl w-full">
		<div class="flex w-full items-center gap-2 place-content-between">
			<div class="text-3xl flex items-center gap-2">
				<h1 class=" font-bold text-base-content">Linker</h1>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=" w-8 h-8"
					fill="currentColor"
					viewBox="0 0 24 24"
					><path
						d="M23 10.826v2.349c-1.562 0-3 1.312-3 2.857 0 2.181 1.281 5.968-6 5.968v-2.002c4.917 0 3.966-1.6 3.966-3.967 0-2.094 1.211-3.5 2.278-4.031-1.067-.531-2.278-1.438-2.278-3.312 0-2.372.94-4.692-3.966-4.686v-2.002c7.285 0 6 4.506 6 6.688 0 1.544 1.438 2.138 3 2.138zm-19-2.138c0-2.182-1.285-6.688 6-6.688v2.002c-4.906-.007-3.966 2.313-3.966 4.686 0 1.875-1.211 2.781-2.278 3.312 1.067.531 2.278 1.938 2.278 4.031 0 2.367-.951 3.967 3.966 3.967v2.002c-7.281 0-6-3.787-6-5.969 0-1.545-1.438-2.857-3-2.857v-2.349c1.562.001 3-.593 3-2.137z"
					/></svg
				>
			</div>

			{#if $page.url.pathname === '/'}
				<div
					class="flex items-center gap-2 join bg-base-200 border-[1px] !border-neutral rounded-xl"
				>
					<svg
						fill-rule="evenodd"
						clip-rule="evenodd"
						class="w-6 h-6 join-item m-2"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
							fill-rule="nonzero"
						/></svg
					>
					<input
						type="text"
						placeholder="eg. Rust"
						class="input bg-base-200 !outline-none !border-none join-item p-0"
					/>
				</div>
			{/if}
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
					/></svg
				>
			</a>
		</div>
	</div>
</header>
