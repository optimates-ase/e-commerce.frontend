<script lang="ts">
	import { stripe } from '$lib/stripe';
	import { onMount } from 'svelte';

	export let price: number;
	export let currency: string;

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
	<h3>Purchase Overview</h3>
	<div>
		{price}
		{currency}
	</div>

	<div class="flex justify-end">
		<button
			class="btn variant-filled-primary w-35"
			on:click={() => {
				console.log(price);
			}}
		>
			Purchase
		</button>
	</div>
</div>

<payment />
