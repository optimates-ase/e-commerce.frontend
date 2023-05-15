import type { Coordinate, Feature, MapBoundries, MapMarker } from '$lib/types';
import type {
	Map,
	GeoJSONSourceSpecification,
	FillLayerSpecification,
	LineLayerSpecification
} from 'maplibre-gl';

function createSource(features: Feature[]) {
	return {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: features
		}
	};
}

function createAreaLayer(countryName: string) {
	return {
		id: 'polygons',
		type: 'fill',
		source: countryName,
		layout: {},
		paint: {
			'fill-color': '#1a1c26',
			'fill-opacity': 1
		}
	};
}

function createBorderLayer(countryName: string, id: string, color: string, opacity: number) {
	return {
		id: id,
		type: 'line',
		source: countryName,
		layout: {},
		paint: {
			'line-color': color,
			'line-opacity': opacity
		}
	};
}

export function addFeatures(map: Map, countryName: string, features: Feature[]) {
	const src: GeoJSONSourceSpecification = createSource(features);
	let areaLayer: FillLayerSpecification = createAreaLayer(countryName);
	const borderLayer: LineLayerSpecification = createBorderLayer(
		countryName,
		'borders',
		'#c0b6b4',
		0.8
	);
	const highlightLayer: LineLayerSpecification = createBorderLayer(
		countryName,
		'highlight',
		'#d4163c',
		0
	);

	map.addSource(countryName, src);
	map.addLayer(areaLayer).addLayer(borderLayer).addLayer(highlightLayer);
}

export function resetFilter(map: Map) {
	const layer = map.getLayer('highlight');
	map.setPaintProperty(layer.id, 'line-opacity', 0);
}

export function filterMap(map: Map, countryName: string, districtId: string) {
	const layer = map.getLayer('highlight');
	map.setFilter(layer.id, ['all', ['==', 'GID_1', districtId]]);
	map.setPaintProperty(layer.id, 'line-opacity', 1);
}

export function easeInOutSine(x: number): number {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

export function easeInOutElastic(x: number): number {
	const c5 = (2 * Math.PI) / 4.5;

	return x === 0
		? 0
		: x === 1
		? 1
		: x < 0.5
		? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
		: (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}

export function resetMap(
	map: Map,
	center: [number, number],
	zoom: number,
	speed: number,
	easingAnimation: (_: number) => number
) {
	map.flyTo({
		center: center,
		zoom: zoom,
		speed: speed,
		curve: 1,
		easing(t) {
			return easingAnimation(t);
		}
	});
}

export function addMarkers(map: Map, markers: MapMarker[]) {
	// markers.map((marker) => {
	// 	const lng = marker.coordinates.lng;
	// 	const lat = marker.coordinates.lat;
	// 	const coordinates: [number, number] = [lng, lat];
	// 	const mk = new Marker().setLngLat(coordinates).addTo(map);
	// 	// mk.getElement().addEventListener('click', () => {
	// 	// 	new Popup().setLngLat(coordinates)
	// 	// 	.setHTML('<h1>Hello World!</h1>')
	// 	// 	.addTo(map);
	// 	// })
	// });
}

export function inBound(map: Map, mapBoundaries: MapBoundries) {
	const center = map.getCenter();

	if (
		center.lat > mapBoundaries.minLat &&
		center.lat < mapBoundaries.maxLat &&
		center.lng > mapBoundaries.minLng &&
		center.lng < mapBoundaries.maxLng
	)
		return true;
	return false;
}
