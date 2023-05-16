<script lang="ts">
	import { goto } from '$app/navigation';
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	import Payment from '$comp/Payment/Payment.svelte';
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { redirect } from '@sveltejs/kit';
	import { onDestroy } from 'svelte';

	const handleClick = (tour: Tour) => {
		favorites.update((arr) => arr.filter((item) => item._id !== tour._id));
		return undefined;
	};

	let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		if (value.length <= 0) {
			throw redirect(301, '/explore');
		}
		tourList = value;
	});

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

<div class="max-w-md mx-auto p-8">
	<div class="mt-5 w-full">
		<div class="">
			<h2 class="mt-1">Selected Tours</h2>
			<div class="text-sm text-gray-500">Click on tours to remove them</div>

			<div class="p-3 max-w-md mx-auto">
				{#each tourList as tour (tour._id)}
					<button class="mb-1" on:click={() => handleClick(tour)}>
						<CardSmall {tour} />
					</button>
				{/each}
			</div>

			<div class="sticky bottom-0 p-4 h-1/5">
				<Payment {price} {currency} {tourList} />
			</div>
		</div>
	</div>
</div>
