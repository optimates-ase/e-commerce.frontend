<script lang="ts">
	import Rating from '$comp/Tours/Rating.svelte';
	import type { Tour } from '$lib/types';
	import Collapser from '$comp/UIUX/Collapser.svelte';
	import CheckoutWizzard from '$comp/Checkout/CheckoutWizzard.svelte';

	export let tour: Tour;

	const { rating, num_of_ratings } = tour;
</script>

<div class="w-full">
	<div class="card p-4 variant-soft-surface shadow-xl">
		<h1 class="flex justify-start">{tour.name}</h1>

		<div class="flex justify-start text-gray-600">{tour.description}</div>
		<Collapser expandAbove={false}>
			<span slot="expanded">
				<CheckoutWizzard />
			</span>
		</Collapser>
	</div>
</div>
