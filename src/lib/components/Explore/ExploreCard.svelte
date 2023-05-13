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

<div class="card">
	<div class="title">{tour.name}</div>
	<div class="descr">
		<div class="w-2/3">
			{tour.description}
		</div>
		<div class="flex justify-end w-full" />
		<div class="w-1/3">
			<ul class="gap-5">
				<li>
					<Rating {rating} {num_of_ratings} />
				</li>
				<li>
					Price: {tour.price}{tour.currency}
				</li>
				<li>
					Minimum: {tour.minimum}
				</li>
			</ul>
		</div>
	</div>
	<div class="w-full">
		<Carousel srcs={tour.images} />
	</div>
	<Favorite favorite={isFavorited()} on:favorited={favoriteToggle} />
</div>

<style>
	.card {
		@apply mx-5 p-5 mt-5;
		@apply flex flex-col gap-1 items-center;
	}
	.title {
		@apply text-3xl;
	}
	.descr {
		@apply flex flex-row gap-1 justify-between w-full;
	}
</style>
