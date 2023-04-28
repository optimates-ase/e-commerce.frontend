<script lang="ts">
	import StaticMap from '$comp/landing/StaticMap.svelte';
	import type { Activity, Country, District, FeatureCollection } from '$lib/types';
	import VRPic from '$comp/UIUX/VR/360Degree.svelte';
	import { browser } from '$app/environment';
	import { selectedDistrict } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';

	export let country: Country;
	export let geoJSON: FeatureCollection;

	let highlighId: string;
	let highlighdDistrict: string;
	let activities: Activity[];
	let countryMode: boolean = true;

	const unsubscribeToHighlightId = selectedDistrict.subscribe((val: string) => (highlighId = val));

	$: {
		let district: District | undefined = country.districts.filter((el: District[]) => {
			return el.id === highlighId;
		})[0];
		if (district) {
			activities = district.activities;
			// console.log(activities);
			highlighdDistrict = district.name;
			countryMode = false;
		} else {
			countryMode = true;
		}
	}

	onMount(() => {
		// TODO maybe remove and keep state when switch
		// countryMode = false;
	});

	onDestroy(() => {
		unsubscribeToHighlightId();
	});
</script>

<div id="countryOverview" class="w-[90%] max-w-screen-xl mx-auto mt-2">
	<div class="mt-20 mb-12 w-full p-2 text-center">
		<div class="text-5xl">(OptiMates)</div>
		<div class="text-4xl mt-4">Explore Belize</div>
		<p class="mt-8">{@html country.hook}</p>
		<button class="btn variant-filled-primary text-xl mt-12"> explore tours </button>
	</div>

	<div class="card p-5">
		<div id="countryOverviewHeader" class="h-60 grid grid-cols-7">
			<div class="col-span-4 w-[90%] mx-auto">
				{#if countryMode}
					<p class="text-center my-auto">
						{@html country.hook}
					</p>
				{:else}
					<div class="h-12">
						<p class="text-center my-auto">Join us in {highlighdDistrict} for:</p>
					</div>
					<ul class="list">
						{#each activities as act}
							<li>
								<span>(icon)</span>
								<span>{act.name}</span>
							</li>
						{/each}
						<li>
							<span>(icon)</span>
							<span>and more</span>
						</li>
					</ul>
				{/if}
			</div>
			<div class="col-span-3 h-">
				{#if browser}
					<StaticMap
						countryName={country.name}
						countryGeoJSON={geoJSON}
						mapBoundaries={country.mapConfig.boundaries}
						center={[country.mapConfig.coordinates.lng, country.mapConfig.coordinates.lat]}
						zoom={country.mapConfig.zoom}
						markers={country.markedCities}
					/>
				{/if}
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
