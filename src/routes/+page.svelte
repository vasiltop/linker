<script>
	import Language from '$lib/components/Language.svelte';
</script>

<div class="w-full h-full grid place-items-center">
	<div class="max-w-7xl w-full h-full">
		<div class=" grid lg:grid-cols-12 m-8 gap-4 grid-cols-1">
			<div class="lg:col-span-5 content col-span-1">
				<h2 class="font-bold text-xl text-primary-content">Search:</h2>
				<div class="grid place-items-center h-4/5">
					<div class="flex justify-center gap-4 flex-wrap">
						<div
							class="flex items-center gap-2 join border-[1px] !border-neutral rounded-xl"
						>
							<svg fill="currentColor" class="w-6 h-6 join-item m-2"
								><path
									d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
									fill-rule="nonzero"
								/></svg
							>
							<input
								type="text"
								placeholder="eg. Rust"
								class="input bg-primary !outline-none !border-none join-item"
							/>
						</div>
						<a href="/" class="btn-link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								fill="currentColor"
								height="24"
								viewBox="0 0 24 24"
								><path
									d="M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z"
								/></svg
							>
						</a>
					</div>
				</div>
			</div>

			<div class="lg:col-span-7 content col-span-1">
				<h2 class="font-bold text-xl text-primary-content">
					Trending Languages:
				</h2>

				<div class="grid lg:grid-cols-3 py-4 grid-cols-1">
					<Language
						name="Rust"
						description="Rust is blazingly fast and memory-efficient: with no runtime or garbage collector"
					/>
				</div>
			</div>

			<div class="lg:col-span-12 content col-span-1">
				<div class="flex">
					<h2 class="font-bold text-xl text-primary-content">
						Search Results:
					</h2>

					<div class=" ml-auto">
						<h2 class="font-bold text-xl text-primary-content">
							Not finding your language? <a
								class="btn-link hover:no-underline bg-base-100"
								href="/"
							>
								Add it!</a
							>
						</h2>
					</div>
				</div>

				<div class="grid lg:grid-cols-4 grid-cols-1 gap-4 p-4">
					{#each { length: 50 } as _, i}
						<Language
							name="Rust"
							description="Rust is blazingly fast and memory-efficient: with no runtime or garbage collector"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
