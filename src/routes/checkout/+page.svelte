<script lang="ts">
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	import Payment from '$comp/Payment/Payment.svelte';
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';

	let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		tourList = value;
	});

	const handleClick = (tour: Tour) => {
		favorites.update((arr) => arr.filter((item) => item._id !== tour._id));
		return undefined;
	};

	onDestroy(() => {
		unsubscribe();
	});

	let price: number = 0;
	let currency: string = 'USD';
	$: {
		price = 0;
		tourList.forEach((tour) => {
			price += tour.price;
		});
	}
</script>

<div class="flex flex-col h-screen">
	<div class="flex-grow overflow-y-auto">
		<h2 class="mt-1">Selected Tours</h2>
		{#each tourList as tour (tour._id)}
			<button on:click={() => handleClick(tour)}>
				<CardSmall {tour} />
			</button>
		{/each}
	</div>
	<div class="sticky bottom-0 p-4 h-1/5">
		<Payment {price} {currency} />
	</div>
</div>
