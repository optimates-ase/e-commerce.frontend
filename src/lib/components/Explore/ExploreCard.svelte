<script lang="ts">
	import Carousel from '$comp/UIUX/Carousel.svelte';
	import Rating from '$comp/Tours/Rating.svelte';
	import Favorite from '$comp/Tours/Favorite.svelte';
	import type { Tour } from '$lib/types';
	import { favorites } from '$lib/stores';

	// representation
	export let tour: Tour;
	let { rating, num_of_ratings } = tour;

	const favoriteToggle = () => {
		favorites.update((arr) => {
			if (arr.some((f) => JSON.stringify(f) === JSON.stringify(tour))) {
				arr = arr.filter((item) => item._id != tour._id);
			} else {
				arr = [...arr, tour];
			}
			return arr;
		});
	};

	const isFavorited = () => {
		return $favorites.some((f) => JSON.stringify(f) === JSON.stringify(tour));
	};
</script>

<div class="card mx-5 p-5 mt-5 max-w-md">
	<div class="text-3xl m-3">{tour.name}</div>
	<div class="flex justify-between font-mono text-gray-500 mx-3">
		<div>
			Price: {tour.price} USD
		</div>
		<div>
			Min Pers: {tour.min_of_participants}
		</div>
	</div>
	<div class="w-full">
		{#if (tour.images = [''])}
			<div class=" p-2">
				<img
					src="https://loremflickr.com/1000/1000/belize,tour"
					alt="placeholder"
					class="rounded-xl h-1/4"
				/>
			</div>
		{:else}
			<Carousel srcs={tour.images} />
		{/if}
	</div>
	<div class="">
		<div class="m-4">
			<div class="">
				{tour.description}
			</div>
		</div>
		<div class="" />
	</div>
	<div class="flex justify-between items-center">
		<div class="mx-3"><Rating {rating} {num_of_ratings} /></div>
		<div class="mx-4">
			<Favorite favorite={isFavorited()} on:favorited={favoriteToggle} />
		</div>
	</div>
</div>
