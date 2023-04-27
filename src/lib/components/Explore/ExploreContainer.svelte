<script lang="ts">
	import type { Tour } from '$lib/types';
	import ExploreCard from '$comp/Explore/ExploreCard.svelte';

	export let tours: Tour[] | [];

	//svelte-swiper
	import { Swipe, SwipeItem } from 'svelte-swipe';

	const swipeConfig = {
		autoplay: false,
		delay: 0,
		showIndicators: false,
		transitionDuration: 500,
		defaultIndex: 0
	};

	//favorites
	let favorites: number[] = [];

	const addFav = (id) => {
		favorites = [...favorite, id]
	};

</script>

<div class="swipe-holder">
	<Swipe {...swipeConfig}>
		{#each tours as tour}
			<SwipeItem>
				<ExploreCard {tour} on:favorited={addFav(tour.id)}/>
			</SwipeItem>
		{/each}
	</Swipe>
</div>

<style>
	.swipe-holder {
		@apply w-full h-full;
	}
</style>
