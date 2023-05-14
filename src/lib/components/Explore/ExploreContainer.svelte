<script lang="ts">
	//svelte-swiper
	import { Swipe, SwipeItem } from 'svelte-swipe';

	import type { Tour } from '$lib/types';
	import ExploreCard from '$comp/Explore/ExploreCard.svelte';

	export let tours: Tour[];

	let currentIndex = 0;
	// const handleSlideChange = (event: any) => {
	// 	console.log(event.active_item);
	// };

	const swipeConfig = {
		autoplay: false,
		delay: 0,
		showIndicators: false,
		transitionDuration: 500,
		defaultIndex: 0
	};

	$: {
		console.log(currentIndex);
	}
</script>

<div class="w-full h-full">
	<Swipe {...swipeConfig} is_vertical={true}>
		{#each tours as tour, index}
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
