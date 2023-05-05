<script lang="ts">
	import Rating from '$comp/Tours/Rating.svelte';
	import type { Tour } from '$lib/types';

	export let tour: Tour;

	const { rating, num_of_ratings } = tour;
	const img =
		'https://imageio.forbes.com/specials-images/imageserve//629fac5c0ef3ef49a86e2169/0x0.jpg?format=jpg&width=1200';
</script>

<div class="w-2/3">
	<div class="card card-hover p-3 variant-soft-surface shadow-xl">
		<img src={img} alt="The Tour" class="rounded-xl" />

		<h2 class="flex justify-start my-3 text-gray-600">{tour.name}</h2>

		<div class="flex justify-start text-gray-600">{tour.description}</div>

		<div class="flex justify-start text-sm mt-5 items-baseline">
			{tour.price} USD
		</div>
		<br />
		<Rating {rating} {num_of_ratings} />
	</div>
</div>
