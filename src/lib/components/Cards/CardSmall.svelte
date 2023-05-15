<script lang="ts">
	import Rating from '$comp/Tours/Rating.svelte';
	import type { Tour } from '$lib/types';
	import Carousel from '$comp/UIUX/Carousel.svelte';

	export let tour: Tour;

	const { rating, num_of_ratings } = tour;
</script>

<div class="w-full">
	<div class="card p-3 variant-soft-surface shadow-xl">
		{#if (tour.images = [''])}
			<div class=" p-2 h-1/4">
				<img
					src="https://loremflickr.com/1000/1000/belize?random={tour._id}"
					alt="placeholder"
					class="rounded-xl h-1/4"
				/>
			</div>
		{:else}
			<Carousel srcs={tour.images} />
		{/if}

		<h2 class="flex justify-start my-3 text-gray-600">{tour.name}</h2>

		<div class="flex justify-start text-gray-600">{tour.description}</div>

		<div class="flex justify-start text-sm mt-5 items-baseline">
			{tour.price} USD
		</div>
		<br />
		<Rating {rating} {num_of_ratings} />
	</div>
</div>
