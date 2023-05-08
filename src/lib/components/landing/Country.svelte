<script lang="ts">
	import StaticMap from '$comp/landing/StaticMap.svelte';
	import type { Activity, Country, District, FeatureCollection } from '$lib/types';
	import VRPic from '$comp/UIUX/VR/360Degree.svelte';
	import { browser } from '$app/environment';
	import { selectedDistrict } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

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
			highlighdDistrict = district.name;
			countryMode = false;
		} else {
			countryMode = true;
			
		}
	}

	onMount(() => {
		// TODO maybe remove and keep state when switch
		countryMode = true;
	});

	onDestroy(() => {
		unsubscribeToHighlightId();
	});
</script>

<div id="countryOverview" class="w-[90%] max-w-screen-xl mx-auto mt-2">
	<div class="hero py-10 text-center">
		<div class="py-4 text-4xl mt-4">Explore Belize</div>
		<p class="mx-12 py-4 px-8">{@html country.hook}</p>
		<button class="btn variant-glass-primary text-xl mt-12" on:click={() => goto("/explore")}>view tours ↪</button>
	</div>

	<div class="mt-4 py-5">
		<div id="countryOverviewHeader" class="mt-4 py-2 grid gap-2 grid-cols-7">
			<div class="col-span-4 py-18 w-[100%] h-64">
				{#if countryMode}
					<p class="text-center my-auto">
						{@html country.hook}
					</p>
				{:else}
					<div class="h-12">
						<p class="text-left py-auto">{highlighdDistrict} offers:</p>
					</div>
					<ul class="list">
						{#each activities as act}
							<li>
								<span><img class="block mx-auto h-6 w-6" src={act.icon} alt="-" /></span>
								<span>{act.name}</span>
							</li>
						{/each}
						<li>
							<span><img class="block mx-auto h-6 w-6" src="/icons/landing/more.svg" alt="-" /></span>
							<span>and more</span>
						</li>
					</ul>
				{/if}
			</div>
			<div class="col-span-3 h-64">
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

	<div class="mx-auto p-8">
		<p class="text-center">{@html country.catchPhrase}</p>
	</div>
</div>

<style>

	.hero {
		/* TODO optimize background image size */
		background-image: url('/san-pedro/sp_2.jpg');
		background-size: cover;
	}

</style>