<script lang="ts">
	//svelte-swiper
	import { Swipe, SwipeItem } from 'svelte-swipe';

	import type { Tour } from '$lib/types';
	import ExploreCard from '$comp/Explore/ExploreCard.svelte';

	export let tours: Tour[];

	const swipeConfig = {
		autoplay: false,
		delay: 0,
		showIndicators: false,
		transitionDuration: 500,
		defaultIndex: 0
	};
</script>

<div class="swipe-holder">
	<Swipe {...swipeConfig} is_vertical={true}>
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
