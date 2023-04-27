<script lang="ts">
	import CountryLanding from '$comp/landing/Country.svelte';
	import DistrictLanding from '$comp/landing/District.svelte';
	import ClimateLanding from '$comp/landing/Climate.svelte';
    import Chat from '$comp/chat/ChatButton.svelte';


	export let data;
</script>

<div class="max-w-md mx-auto p-3">
	<CountryLanding country={data.country} geoJSON={data.countryMap}/>
	<ClimateLanding minorInfluence={data.country.climateInfluenceMinor} />
	<DistrictLanding country={data.country} districts={data.country.districts} />
	<Chat/>
</div>
