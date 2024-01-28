<script lang="ts">
	//import { page } from '$app/stores';
</script>

<header
	class=" p-4 order-b-[1px] grid place-items-center bg-primary border-b-neutral border-b-[1px]"
>
	<div class=" max-w-5xl w-full">
		<div class="flex w-full items-center gap-2">
			<div class="text-3xl flex items-center gap-2 w-full">
				<h1 class=" font-bold text-primary-content">Linker</h1>

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

			<div class="flex-1 flex gap-1">
				<a href="/" class="btn-link">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
						><path
							d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
						/></svg
					>
				</a>
				<a href="/logout" class="btn-link">
					<svg
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
						><path
							d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</header>
