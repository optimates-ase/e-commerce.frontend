<script lang="ts">
	import type { Tour } from '$lib/types';
	import ExploreCard from './ExploreCard.svelte';

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
	//
</script>

<div class="swipe-holder">
	<Swipe {...swipeConfig}>
		{#each tours as tour}
			<SwipeItem>
				<ExploreCard {tour} />
			</SwipeItem>
		{/each}
	</Swipe>
</div>

<style>
	.swipe-holder {
		@apply w-full h-full;
	}
</style>
