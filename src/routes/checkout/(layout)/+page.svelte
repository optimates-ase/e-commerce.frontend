<script lang="ts">
	import CheckoutCard from '$comp/Cards/CheckoutCard.svelte';
	import { favorites, orders } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';

	const handleRemove = (tour: Tour) => {
		favorites.update((arr) => arr.filter((item) => item._id !== tour._id));
		orders.update((arr) => arr.filter((item) => item.tour_id !== tour._id));
		return undefined;
	};

	export let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		tourList = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="absolutemax-w-md mx-auto p-2">
	<div class="p-5">
		<h1 class="mt-1">Checkout</h1>
		<div class="text-sm text-gray-500">Click on tours to choose a date and a guide</div>
	</div>
	<div class="mt-5 w-full">
		<div class="max-w-md mx-auto">
			{#each tourList as tour (tour._id)}
				<div class="relative mb-1">
					<CheckoutCard {tour} />
					<button
						class="variant-filled-primary absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
						style="outline: none;"
						on:click={handleRemove(tour)}
					>
						<img src="icons/x.svg" alt="Cross SVG" />
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
