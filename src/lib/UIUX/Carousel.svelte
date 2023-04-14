<script lang="ts">
	import type { CarouselImg } from '$lib/types';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	export let srcs: CarouselImg;
	register();

	const spaceBetween = 10;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};
</script>

{#if srcs}
<swiper-container
	loop={true}
	class="max-w-sm"
	slides-per-view={1}
	space-between={spaceBetween}
	centered-slides={true}
	pagination={{
		hideOnClick: true
	}}
	on:progress={onProgress}
	on:slidechange={onSlideChange}
>
	{#each srcs.imgs as src}
	{#if src.src !== ""}
		<swiper-slide><img src={src.src} alt={src.altText}/></swiper-slide>
		<!-- <div><p>{src.altText}</p></div> -->
	{/if}
	{/each}
</swiper-container>
{:else}
<h1>ERROR</h1>
{/if}
