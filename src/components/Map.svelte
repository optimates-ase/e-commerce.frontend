<script>
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let countryName;
	export let features;

	let map;
	let mapContainer;

	function addDistricts() {
		const src = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: features
			}
		};

		const areaLayer = {
			id: 'polygons',
			type: 'fill',
			source: countryName,
			layout: {},
			paint: {
				'fill-color': '#FFAA01',
				'fill-opacity': 0.5
			}
		};

		const borderLayer = {
			id: 'outline',
			type: 'line',
			source: countryName,
			layout: {},
			paint: {
				'line-color': '#F3A040',
				'line-width': 2
			}
		};
		map.addSource(countryName, src);
		map.addLayer(areaLayer).addLayer(borderLayer);
	}

	onMount(() => {
		const apiKey = 'R7SWIU6LxTG0LcVb5eyr';

		const initialState = { lng: -88.3596575, lat: 17.5, zoom: 9 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.addControl(new NavigationControl(), 'top-right');
		new Marker({ color: '#FF0000' }).setLngLat([-88.2, 17.5]).addTo(map);

		map.on('load', () => {
			addDistricts();
		});

		map.on('click', 'polygons', function (e) {
			new Popup().setLngLat(e.lngLat)
			.setHTML(
				'<h3>' +
					'District' +
					'</h3><p>' +
					e.features[0].properties.name +
					'</p>' +
					'<h3>' +
					'Tours' +
					'</h3><p>' +
					e.features[0].properties.tours +
					'</p>'
			).addTo(map);
		});
	});

	onDestroy(() => {
		map.remove();
	});
</script>

<AppShell class="flex justify-center">
	<div class="map-wrap flex justify-center my-20 ">
		<div class="map shadow-xl rounded-2xl " id="map" bind:this={mapContainer} />
	</div>
</AppShell>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: calc(47.5vh); /* calculate height of the screen minus the heading */
	}

	.map {
		position: absolute;
		width: 60%;
		height: 100%;
	}
</style>
