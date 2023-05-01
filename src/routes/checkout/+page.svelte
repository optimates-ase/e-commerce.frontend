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

<div>
	<div class="flex flex-col gap-2 w-4/5">
		<h2 class="mt-1">Selected Tours</h2>
		{#each tourList as tour (tour.id)}
			<button on:click={() => handleClick(tour)}>
				<CardSmall {tour} />
			</button>
		{/each}
	</div>
</div>

<div class="fixed top-20 right-0 w-2/5 m-2">
	<h3>Purchase Overview</h3>
	<div>
		{price} USD
	</div>

	<button class="btn variant-filled-primary"> Purchase </button>
</div>
