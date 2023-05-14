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

<div class=" w-full h-full">
	<Swipe {...swipeConfig} is_vertical={false}>
		{#each tours as tour}
			<SwipeItem>
				<div class="">
				<ExploreCard {tour} />
				</div>
			</SwipeItem>
		{/each}
	</Swipe>
</div>
<style>
	
</style>
