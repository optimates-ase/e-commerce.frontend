<script lang="ts">
	import StaticMap from '$comp/landing/StaticMap.svelte';
	import type { Country, FeatureCollection } from '$lib/types';
	import VRPic from '$comp/UIUX/VR/360Degree.svelte';

	export let country: Country;
	export let geoJSON: FeatureCollection;

</script>

<div id="countryOverview" class="w-[90%] max-w-screen-xl mx-auto mt-2">

	<div class="mt-20 mb-12 w-full p-2 text-center">
		<div class="text-5xl">(OptiMates)</div>
		<div class="text-4xl mt-4">Explore Belize</div>
		<p class="mt-8">{@html country.hook}</p>
		<button class="btn variant-filled-primary text-xl mt-12">
			Explore
		</button>
	</div>

	<div class="card p-5">
		<div id="countryOverviewHeader" class="h-60 grid grid-cols-7">
			<div class="col-span-4 w-[90%] m-auto">			
					<p class="text-center">HERE SHOULD BE DISTRICT ATTRACTIONS{@html country.hook}</p>
			</div>
			<div class="col-span-3 h- ">
				<StaticMap
					countryName={country.name}
					countryGeoJSON={geoJSON}
					center={[country.mapConfig.coordinates.lng, country.mapConfig.coordinates.lat]}
					zoom={country.mapConfig.zoom}
					markers={country.markedCities}
					
				/>
			</div>
		</div>
	</div>

	<div class="mt-10 w-full p-2">
		<h1>Look around</h1>
	</div>
	<div id="countryOverviewContent" class="h-80 mx-6 my-2 mb-8">
		<VRPic />
	</div>
	
	<div class="card mx-auto p-8">
		<p class="text-center">{@html country.catchPhrase}</p>
	</div>
</div>
