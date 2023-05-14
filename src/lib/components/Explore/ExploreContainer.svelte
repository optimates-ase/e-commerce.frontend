<script lang="ts">
	//svelte-swiper
	import { Swipe, SwipeItem } from 'svelte-swipe';

	import type { Tour } from '$lib/types';
	import ExploreCard from '$comp/Explore/ExploreCard.svelte';
	import { children } from 'svelte/internal';

	export let tours: Tour[];
	let SwipeComp;
	let currentIndex = 0;
	const handleSlideChange = (event: any) => {
		console.log(event.active_item);
	};
	$: console.log(currentIndex);

	const swipeConfig = {
		autoplay: false,
		delay: 0,
		showIndicators: false,
		transitionDuration: 500,
		defaultIndex: 0,
		callback: function (index: number) {
			currentIndex = index;
		}
	};
</script>

<div class="swipe-holder">
	<Swipe
		{...swipeConfig}
		is_vertical={true}
		bind:this={SwipeComp}
		on:change={() => handleSlideChange}
	>
		{#each tours as tour, index}
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
