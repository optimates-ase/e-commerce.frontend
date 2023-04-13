<script lang="ts">
	//svelte
	import SmallMap from '$lib/Map/SmallMap.svelte';
	import Carousel from '$lib/UIUX/Carousel.svelte';
	import { onMount } from 'svelte';

	import landingData from '$lib/data/Belize.json';

	import 'aframe';
	import 'aframe-svelte';

	import { cardContent, cardTitle } from '$lib/stores/TextPrompts/Home';

	import { activeDis } from '$lib/stores/Districts';

	export let data;

	let ct;
	let cc;

	let ad_srcs = ['home/home.jpg'];

	onMount(() => {
		cardTitle.set(landingData.country);
		cardContent.set(landingData.keyphrases.home);
	});

	cardContent.subscribe((val) => {
		cc = val;
	});

	cardTitle.subscribe((val) => {
		ct = val;
	});

	activeDis.subscribe((val) => {
		if (landingData.pictures[val].src.length > 0) {
			ad_srcs = landingData.pictures[val].src;
			cc = landingData.keyphrases[val];
			ct = val;
		} else {
			// resetting doesn't work yet
			console.log('attempting to reset ct cc', cc, ct);
			ct = landingData.country;
			cc = landingData.keyphrases.home;
			console.log('after', cc, ct);
		}
	});
</script>

<div class="ml-6 mr-6 mt-4 max-w-2xl">
	<!-- <div class="card m-4 max-w-2xl"> -->
	<Carousel srcs={ad_srcs} />
	<!-- <img src="bg/Candidate1.jpg" /> -->
</div>

<div class="grid gap-4 grid-cols-6 m-4 p-2 max-w-2xl">
	<div class="card col-span-4 p-2">
		<div class="grid gap-2 grid-cols-3">
			<div class="col-span-2">
				<h2>{ct}</h2>
			</div>
		</div>
		<p>
			{cc}
		</p>
	</div>
	<div class="card col-span-2">
		<SmallMap countryName={data.countryName} features={data.districts} />
	</div>
</div>
