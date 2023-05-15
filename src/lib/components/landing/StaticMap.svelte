<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Map } from 'maplibre-gl';
	import { PUBLIC_MAPTILER_STYLES } from '$env/static/public';
	import type { FeatureCollection, MapBoundries, MapMarker } from '$lib/types';
	import {
		addFeatures,
		easeInOutElastic,
		easeInOutSine,
		filterMap,
		inBound,
		resetFilter,
		resetMap
	} from '$comp/Map/utils';
	import { selectedDistrict } from '$lib/stores';

	export let countryName: string;
	export let countryGeoJSON: FeatureCollection;
	export let mapBoundaries: MapBoundries;
	export let center: [number, number];
	export let zoom: number;

	let mapContainer: string | HTMLElement;
	let map: Map | undefined;
	let loading: boolean = true;
	let dId: string;

	const handleMapReset = async (
		resMap: Map,
		easingAnimation: (_: number) => number,
		speed: number
	) => {
		resetMap(resMap, center, zoom, speed, easingAnimation);
	};

	const unsubscribeToHighlightId = selectedDistrict.subscribe((val: string) => {
		dId = val;
	});

	// TODO Add markers for Belize City, San Ignacio, Belmopan, Orange Walk Town and Corazol Town
	onMount(() => {
		let map: Map = new Map({
			container: mapContainer,
			style: PUBLIC_MAPTILER_STYLES,
			center: [8.55, 47.36667],
			zoom: zoom,
			dragPan: true,
			dragRotate: false,
			touchZoomRotate: false,
			attributionControl: false
		});

		map.on('load', async () => {
			addFeatures(map, countryName, countryGeoJSON.features);
			handleMapReset(map, easeInOutSine, 2.5);
			loading = false;
		});

		map.on('zoom', () => {
			if (!(inBound(map, mapBoundaries) || map.isEasing())) {
				setTimeout(() => handleMapReset(map, easeInOutElastic, 2.5), 300);
			}
		});

		map.on('move', () => {
			if (!(inBound(map, mapBoundaries) || map.isEasing())) {
				setTimeout(() => handleMapReset(map, easeInOutElastic, 0.5), 300);
			}
		});

		map.on('click', (e) => {
			resetFilter(map);
			selectedDistrict.set('');
		});
		map.on('click', 'polygons', (e) => {
			let districtId = e.features[0].properties.GID_1;
			filterMap(map, countryName, districtId);
			selectedDistrict.set(districtId);
		});
	});

	onDestroy(() => {
		map?.remove();
		unsubscribeToHighlightId();
	});
</script>

<div class="h-full" bind:this={mapContainer} />
