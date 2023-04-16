<script lang="ts">
	import Explore from '$comp/Explore/Explore.svelte';
	import type { Tour } from '$lib/types';

	//swiper
	import Swiper from 'swiper';
	import 'swiper/css';
	//

	export let data: Tour[];
	$: tours = data;
	console.log('page: explore');
</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		{#each tours as tour}
			<div class="swiper-slide">
				<Explore {tour} />
			</div>
		{/each}
	</div>
</div>

<style>
</style>
