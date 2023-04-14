<script lang="ts">
	//svelte
	import SmallMap from '$lib/Map/SmallMap.svelte';
	import Carousel from '$lib/UIUX/Carousel.svelte';
	import { onMount } from 'svelte';

	import landingData from '$lib/data/Belize.json';

	import CountryLanding from '$lib/landing/Country.svelte';
	import DistrictLanding from '$lib/landing/District.svelte';
	import ClimateLanding from '$lib/landing/Climate.svelte';
	import Climate from '$lib/landing/Climate.svelte';

	export let data;
</script>

<CountryLanding country={data.country} />
<Climate minorInfluence={data.country.climateInfluenceMinor} />
{#each data.country.districts as district}
	<!-- <DistrictLanding district={data.country.districts[3]} /> -->
	<!-- <DistrictLanding district={district} /> -->

{/each}
<!-- <DistrictLanding -->
