<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	export let srcs: string[];

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
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		pagination={{
			hideOnClick: true
		}}
		on:progress={onProgress}
		on:slidechange={onSlideChange}
		class="h-auto w-auto"
	>
		{#each srcs as src}
			<swiper-slide>
				<img {src} alt="some nice view from a boat" />
			</swiper-slide>
		{/each}
	</swiper-container>
{:else}
	<h1>ERROR</h1>
{/if}
