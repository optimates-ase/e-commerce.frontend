<script lang="ts">
	//svelte-swiper
	import { Swipe, SwipeItem } from 'svelte-swipe';

	import type { Tour } from '$lib/types';
	import ExploreCard from '$comp/Explore/ExploreCard.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const dispatchShortage = () => {
		dispatch('shortage', { message: 'Shortage event occurred' });
	};

	export let tours: Tour[];

	let active_item: number;

	const swipeConfig = {
		autoplay: false,
		delay: 0,
		showIndicators: false,
		transitionDuration: 200,
		defaultIndex: 0
	};

	$: {
		if (tours.length - active_item <= 2) {
			dispatchShortage();
		}
	}
</script>

<div class="w-full h-full">
	<Swipe {...swipeConfig} is_vertical={true} bind:active_item>
		{#each tours as tour, index}
			<SwipeItem>
				<ExploreCard {tour} />
			</SwipeItem>
		{/each}
	</Swipe>
</div>

<style>
</style>
