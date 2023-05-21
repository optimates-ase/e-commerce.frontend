<script lang="ts">
	import Rating from '$comp/Tours/Rating.svelte';
	import type { Order, Tour } from '$lib/types';
	import Collapser from '$comp/UIUX/Collapser.svelte';
	import CheckoutWizzard from '$comp/Checkout/CheckoutWizzard.svelte';
	import { orders } from '$lib/stores';

	export let tour: Tour;
	const order: Order = {
		tour_id: tour._id
	};

	orders.update((orderList) => {
		const existingOrder = orderList.find((o) => o.tour_id === order.tour_id);
		if (!existingOrder) {
			return [...orderList, order];
		}
		return orderList;
	});

	const { rating, num_of_ratings } = tour;
</script>

<div class="w-full">
	<div class="card p-4 variant-soft-surface shadow-xl">
		<h1 class="flex justify-start">{tour.name}</h1>

		<div class="flex justify-start text-gray-600">{tour.description}</div>
		<Collapser expandAbove={false}>
			<span slot="expanded">
				<CheckoutWizzard {tour} />
			</span>
		</Collapser>
	</div>
</div>
