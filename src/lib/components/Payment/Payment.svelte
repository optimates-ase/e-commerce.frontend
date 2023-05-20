<script lang="ts">
	import { stripe } from '$lib/stripe';
	import type { Tour } from '$lib/types';
	import { onMount } from 'svelte';
	import Collapser from '$comp/UIUX/Collapser.svelte';

	export let price: number;
	export let currency = 'usd';
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

<div class="bg-surface-700 bg-inherit p-5 w-full">
	<Collapser expandAbove={true}>
		<span slot="expanded">
			<h2 class="mb-3">Purchase Overview</h2>
			<div class="text-gray-500 font-mono p-3">
				Recap:
				<div class="m-2">
					{#each tourList as tour (tour._id)}
						<div class="flex justify-between">
							<div>- {tour.name}</div>
							<div>$ {tour.price}</div>
						</div>
					{/each}
				</div>
			</div>
		</span>
	</Collapser>

	<div class="flex justify-between items-center w-full">
		<div class="flex items-end">
			<div class="mx-3 mb-1">Total:</div>
			<div class="font-mono text-2xl">
				{price}
				{currency.toUpperCase()}
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
