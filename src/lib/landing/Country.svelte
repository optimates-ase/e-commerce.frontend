<script lang="ts">
	import StaticMap from '$lib/landing/StaticMap.svelte';
	import type { Country } from '$lib/types';
	import VRPic from '$lib/UIUX/VR/360Degree.svelte';

	export let country: Country;
</script>

<div id="countryOverview" class="h-full w-[90%] max-w-screen-xl mx-auto mt-2">
	<div id="countryOverviewHeader" class="grid grid-cols-7 h-1/3">
		<div class="card col-span-4 ">
			<div class="h-full w-[80%] flex items-center mx-auto">
				<p class="text-center">{@html country.hook}</p>
			</div>
		</div>
		<div class="col-span-3 h-fill">
			<StaticMap
				countryName={country.name}
				countryGeoJSON={country.geoJSON}
				center={[country.mapConfig.coordinates.lng, country.mapConfig.coordinates.lat]}
				zoom={country.mapConfig.zoom}
				markers={country.markedCities}
			/>
		</div>
	</div>
	<div id="countryOverviewContent" class="h-2/5 my-4">
		<VRPic />
	</div>
	<div class="card mx-auto p-8">
		<p class="text-center">{@html country.catchPhrase}</p>
	</div>
</div>
