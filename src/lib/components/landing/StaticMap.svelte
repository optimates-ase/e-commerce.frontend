<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import { Map } from 'maplibre-gl';
	import { PUBLIC_MAPTILER_STYLES } from '$env/static/public';
	import type { FeatureCollection, MapMarker } from '$lib/types';
	import { addFeatures, addMarkers } from '$comp/Map/utils';

	export let countryName: string;
	export let countryGeoJSON: FeatureCollection;
	export let center: [number, number]
	export let zoom: number;
	export let markers: MapMarker[];

	let mapContainer: string | HTMLElement;
	let map: Map | undefined

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
			scrollZoom: false,
			attributionControl: false			
		});

		map.on('load', () => {
			addFeatures(map, countryName, countryGeoJSON.features);
			// addMarkers(map, markers);
			// map.resize();
		});
		// if(highlighted !== '') map.setFilter(borderLayer.id, ["all", ["==", "id", highlighted]]);

		map.on('click', 'polygons', function (e) {
			// let districtId = e.features[0].properties.id;
			// map.setFilter(borderLayer.id, ['all', ['==', 'id', districtId]]);
			// activeDis.set(districtId);
			// console.log(e.features[0].properties);
		});

	});

	onDestroy(() => {
		map = undefined;
	})
</script>

<div class="h-full" bind:this={mapContainer} />
