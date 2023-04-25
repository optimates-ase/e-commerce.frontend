<script lang="ts">
	import StaticMap from '$comp/landing/StaticMap.svelte';
	import type { Country, FeatureCollection } from '$lib/types';
	import VRPic from '$comp/UIUX/VR/360Degree.svelte';

	export let country: Country;
	export let geoJSON: FeatureCollection;

</script>

<div id="countryOverview" class="w-[90%] max-w-screen-xl mx-auto mt-2">
	<div id="countryOverviewHeader" class="h-60 grid grid-cols-7">
		<div class="col-span-4 w-[90%] m-auto">			
				<p class="text-center">{@html country.hook}</p>
		</div>
		<div class="col-span-3 h-">
			<StaticMap
				countryName={country.name}
				countryGeoJSON={geoJSON}
				center={[country.mapConfig.coordinates.lng, country.mapConfig.coordinates.lat]}
				zoom={country.mapConfig.zoom}
				markers={country.markedCities}
			/>
		</div>
	</div>
	<div id="countryOverviewContent" class="h-80 my-4">
		<VRPic />
	</div>
	<div class="card mx-auto p-8">
		<p class="text-center">{@html country.catchPhrase}</p>
	</div>
</div>
