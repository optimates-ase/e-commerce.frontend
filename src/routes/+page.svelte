<script lang="ts">
	import CountryLanding from '$comp/landing/Country.svelte';
	import DistrictLanding from '$comp/landing/District.svelte';
	import ClimateLanding from '$comp/landing/Climate.svelte';
	export let data;
</script>

<svelte:head>
	<title>OptiMates - Adventures in Belize</title>
</svelte:head>

<div class="max-w-md mx-auto p-3">
	<CountryLanding country={data.country} geoJSON={data.countryMap}/>
	<ClimateLanding weather={data.weatherInfo} />
	<DistrictLanding districts={data.country.districts} />
</div>
