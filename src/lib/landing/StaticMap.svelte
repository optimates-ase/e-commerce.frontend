<script lang="ts">
	import { onMount } from 'svelte';

	import { Map } from 'maplibre-gl';
	import { PUBLIC_MAPTILER_STYLES } from '$env/static/public';
	import type { Country, Feature, FeatureCollection, MapMarker } from '$lib/types';
	import { addFeatures, addMarkers } from '$lib/Map/utils';

	export let countryName: string;
	export let countryGeoJSON: FeatureCollection;
	export let center: [number, number]
	export let zoom: number;
	export let markers: MapMarker[];

	let mapContainer: string | HTMLElement;

	// TODO Add markers for Belize City, San Ignacio, Belmopan, Orange Walk Town and Corazol Town

	onMount(() => {
		let map: Map = new Map({
			container: mapContainer,
			style: PUBLIC_MAPTILER_STYLES,
			center: center,
			zoom: zoom,
			dragPan: false,
			dragRotate: false,
			doubleClickZoom: false,
			touchZoomRotate: false,
			scrollZoom: false
		});

		map.on('load', () => {
			addFeatures(map, countryName, countryGeoJSON.features);
			addMarkers(map, markers)
		});
		// if(highlighted !== '') map.setFilter(borderLayer.id, ["all", ["==", "id", highlighted]]);

		map.on('click', 'polygons', function (e) {
			// let districtId = e.features[0].properties.id;
			map.setFilter(borderLayer.id, ['all', ['==', 'id', districtId]]);
			// activeDis.set(districtId);
			// console.log(e.features[0].properties);
		});

	});
</script>

<div class="ml-auto m w-full h-full" id="map" bind:this={mapContainer} />
