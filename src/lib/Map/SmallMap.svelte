<script>
	import { Map } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';
	import { activeDis } from '$lib/stores/Districts';
	import { PUBLIC_MAPTILER_STYLES } from '$env/static/public';

	export let features;
	export let countryName;

	let map;
	let mapContainer1;
	let districts;
	let borderLayer;

	function addDistricts() {
		const src = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: features
			}
		};

		let areaLayer = {
			id: 'polygons',
			type: 'fill',
			source: countryName,
			paint: {
				'fill-color': '#FFAA01',
				'fill-opacity': 0.1
			}
		};

		borderLayer = {
			id: 'outline',
			type: 'line',
			source: countryName,
			paint: {
				'line-color': '#FFAA01',
				'line-width': 0.8
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
		const initialState = { lng: -88.65292533421297, lat: 16.95, zoom: 6 };
		map = new Map({
			container: mapContainer1,
			style: PUBLIC_MAPTILER_STYLES,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		map.on('load', () => {
			addDistricts();
		});

		map.on('click', 'polygons', function (e) {
			let districtId = e.features[0].properties.id;
			map.setFilter(borderLayer.id, ['all', ['==', 'id', districtId]]);
			activeDis.set(districtId);
		});
	});
</script>

<div class="map-wrap flex ">
	<div class="map" id="map" bind:this={mapContainer1} />
</div>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: 100%; /* calculate height of the screen minus the heading */
	}

	.map {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
