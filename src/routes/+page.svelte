<script lang="ts">
	import { trpc } from '$lib/client';
	import LanguageCard from '$lib/components/LanguageCard.svelte';
	import { onMount } from 'svelte';
	import type { Language } from '$lib/server/schema';

	let languages: Language[] = [];
	let recommendedLanguages: Language[] = [];

	onMount(async () => {
		languages = await trpc.language.getAll.query();
		recommendedLanguages = await trpc.language.getRecommended.query();
	});

	let searchQuery = '';
	$: {
		searchQuery;

		onSearchChange();
	}
	async function onSearchChange() {
		languages = await trpc.language.search.query(searchQuery);
	}
</script>

<div class="w-full h-full grid place-items-center">
	<div class="max-w-7xl w-full h-full">
		<div class=" grid lg:grid-cols-12 md:grid-cols-12 m-8 gap-4 grid-cols-1">
			<div class="lg:col-span-5 content md:col-span-5 col-span-1">
				<h2 class="font-bold text-xl text-primary-content">Search:</h2>
				<div class="grid place-items-center h-4/5">
					<div class="flex justify-center gap-4 flex-wrap my-2">
						<div
							class="flex items-center join border-[1px] !border-neutral rounded-xl max-w-sm"
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
								class="input bg-primary !outline-none !border-none join-item w-full"
								bind:value={searchQuery}
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="lg:col-span-7 content md:col-span-7 col-span-1">
				<h2 class="font-bold text-xl text-primary-content">
					Recommended Languages:
				</h2>

				<div
					class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4 gap-4"
				>
					{#each recommendedLanguages as language}
						<LanguageCard
							id={language.id}
							name={language.name}
							description={language.description}
						/>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-12 md:col-span-12 content col-span-1">
				<div class="flex flex-wrap">
					<h2 class="font-bold text-xl text-primary-content">
						Search Results:
					</h2>

					<div class=" ml-auto">
						<h2 class="font-bold text-xl text-primary-content">
							Not finding your language? <a
								class="btn-link hover:no-underline bg-base-100"
								href="/add"
							>
								Add it!</a
							>
						</h2>
					</div>
				</div>

				<div
					class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4"
				>
					{#each languages as language}
						<LanguageCard
							id={language.id}
							name={language.name}
							description={language.description}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
