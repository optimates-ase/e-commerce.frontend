<script lang="ts">
	import Carousel from '$lib/UIUX/Carousel.svelte';
	import VRPic from '$lib/UIUX/VR/360Degree.svelte';
	import type { CarouselImg } from '$lib/types';

    export let images: CarouselImg[]
    console.log(images)
</script>

<div class="">
	<!-- <Carousel srcs={images[3]} /> -->
    <VRPic />
</div>
