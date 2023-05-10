<script lang="ts">
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';

	let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		tourList = value;
	});

	const handleClick = (tour: Tour) => {
		favorites.update((arr) => arr.filter((item) => item.id !== tour.id));
		return undefined;
	};

	onDestroy(() => {
		unsubscribe();
	});

	let price: number = 0;
	$: {
		price = 0;
		tourList.forEach((tour) => {
			price += tour.price;
		});
	}
</script>


<div class="max-w-md mx-auto p-3">
	<h2 class="mb-3">Purchase Overview</h2>
	<div class="card w-full my-3 p-3">
		<div class="text-gray-500 font-mono mb-5 p-3">
		Recap:
		<div class="m-2">

			{#each tourList as tour (tour.id)}
			<div class="flex justify-between">
				<div>- {tour.name}</div>
				<div>{tour.price} USD</div>
			</div>
			{/each}
		</div>
		</div>
			<div class="flex justify-between items-center w-full">
				<div class="flex items-end">
					<div class="mx-3 mb-1">
				Total: 
			</div>
				<div class="font-mono text-2xl">
					{price} USD
				</div>
			</div>
			<button class="btn variant-filled-primary"> Purchase </button>
		</div>
	</div>
	<div class="mt-5 w-full">
		<div class="">
			<h2 class="mt-1">Selected Tours</h2>
			<div class="text-sm text-gray-500">
			Click on tours to remove them
		</div>
			{#each tourList as tour (tour.id)}
				<button on:click={() => handleClick(tour)}>
					<CardSmall {tour} />
				</button>
			{/each}
		</div>
	</div>
</div>

