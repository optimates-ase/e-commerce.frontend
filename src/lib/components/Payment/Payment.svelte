<script lang="ts">
	import { stripe } from '$lib/stripe';
	import type { Tour } from '$lib/types';
	import { onMount } from 'svelte';

	// transition imports
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	//layout
	let expanded = false;
	const up = '/icons/chevron-up.svg';
	const down = '/icons/chevron-down.svg';
	let chevron: string = up;

	const slideParams = {
		delay: 100,
		duration: 400,
		easing: quintOut,
		axis: 'y'
	};

	function handleExpand(): void {
		expanded = !expanded;
		chevron = expanded ? down : up;
	}

	export let price: number;
	export let currency: string;
	export let tourList: Tour[];

	onMount(() => {
		const payment = stripe
			?.elements({
				mode: 'payment',
				currency: currency.toLowerCase(),
				amount: price
			})
			.create('payment');
	});
</script>

<div class="w-full">
	<div class="card w-full p-3">
		{#if expanded}
			<div
				transition:slide={{
					delay: 100,
					duration: 400,
					easing: quintOut,
					axis: 'y'
				}}
			>
				<h2 class="mb-3">Purchase Overview</h2>
				<div class="text-gray-500 font-mono p-3">
					Recap:
					<div class="m-2">
						{#each tourList as tour (tour._id)}
							<div class="flex justify-between">
								<div>- {tour.name}</div>
								<div>{tour.price} {currency}</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}

		<button class="rounded w-full flex flex-row justify-center" on:click={() => handleExpand()}>
			<img src={chevron} alt="chevrons" />
		</button>

		<div class="flex justify-between items-center w-full">
			<div class="flex items-end">
				<div class="mx-3 mb-1">Total:</div>
				<div class="font-mono text-2xl">
					{price}
					{currency}
				</div>
			</div>
			<button
				class="btn variant-filled-primary"
				on:click={() => {
					console.log(price);
				}}
			>
				Purchase
			</button>
		</div>
	</div>
</div>

<style>
	.fade-transition {
		transition: opacity 0.3s ease;
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		opacity: 1;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit-active {
		opacity: 0;
	}
</style>
