<script lang="ts">
	import Carousel from '$comp/UIUX/Carousel.svelte';
	import type { Tour } from '$lib/types';

	export let tour: Tour;
</script>

<div class="card">
	<div class="title">{tour.name}</div>
	<div class="descr">
		<div>{tour.description}</div>
		<div>
			<ul>
				<li>
					Price: {tour.price}
					{tour.currency}
				</li>
				<li>
					Rating: {tour.rating}
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
</div>

<style>
	.card {
		@apply mx-5 px-5 mt-5;
		@apply flex flex-col gap-1 items-center;
	}
	.title {
		@apply text-3xl;
	}

	.descr {
		@apply flex flex-row gap-1 justify-between w-full;
	}
</style>
