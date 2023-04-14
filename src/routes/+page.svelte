<script lang="ts">
	import CountryLanding from '$comp/landing/Country.svelte';
	import DistrictLanding from '$comp/landing/District.svelte';
	import ClimateLanding from '$comp/landing/Climate.svelte';

	export let data;
</script>
<div class="max-w-md mx-auto">
	<CountryLanding country={data.country} />
	<ClimateLanding minorInfluence={data.country.climateInfluenceMinor} />
	<!-- {#each data.country.districts as district} -->
	<DistrictLanding districts={data.country.districts} />
	<!-- <DistrictLanding district={district} /> -->
	
	<!-- {/each} -->
	<!-- <DistrictLanding -->

</div>
