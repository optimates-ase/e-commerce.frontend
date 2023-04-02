<script>
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { activeDis } from '$lib/stores/Districts';

	export let countryName;
	export let features;

	let map;
	let mapContainer;
	let borderLayer;
	let areaLayer;

	function addDistricts() {
		const src = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: features
			}
		};

		areaLayer = {
			id: 'polygons',
			type: 'fill',
			source: countryName,
			layout: {},
			paint: {
				'fill-color': '#FFAA01',
				'fill-opacity': 0
			}
		};

		borderLayer = {
			id: 'outline',
			type: 'line',
			source: countryName,
			layout: {},
			paint: {
				'line-color': '#FFAA01',
				'line-width': 1
			}
		};
		map.addSource(countryName, src);
		map.addLayer(areaLayer).addLayer(borderLayer);
		// if(highlighted !== '') map.setFilter(borderLayer.id, ["all", ["==", "id", highlighted]]);

		activeDis.subscribe((value) => {
			map.setFilter(borderLayer.id, ['all', ['==', 'id', value]]);
		});
	}

	onMount(() => {
		const apiKey = 'R7SWIU6LxTG0LcVb5eyr';

		const initialState = { lng: -88.65292533421297, lat: 17.142917035265143, zoom: 6.92669820869367 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
		});

		map.addControl(new NavigationControl(), 'top-right');

		map.on('load', () => {
			addDistricts();
		});

		map.on('click', 'polygons', function (e) {
			console.log(map.getZoom(), map.getCenter());
			map.setFilter(borderLayer.id, ['all', ['==', 'id', e.features[0].properties.id]]);
		});
	});

	// onDestroy(() => {
	// 	map.remove();
	// });
</script>

<AppShell class="flex justify-center">
	<div class="map-wrap flex my-20 ">
		<div class="map shadow-xl rounded-2xl " id="map" bind:this={mapContainer} />
	</div>
</AppShell>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: 90%; /* calculate height of the screen minus the heading */
	}

	.map {
		position: relative;
		width: 35%;
		height: 100%;
	}
</style>
