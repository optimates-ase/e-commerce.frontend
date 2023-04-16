import type { Feature, MapMarker } from '$lib/types';
import { type Map, type GeoJSONSourceSpecification, type FillLayerSpecification, type LineLayerSpecification, Marker, Popup } from 'maplibre-gl';

export function addFeatures(map: Map, countryName: string, features: Feature[]) {
	const src: GeoJSONSourceSpecification = {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: features
		}
	};
	let areaLayer: FillLayerSpecification = {
		id: 'polygons',
		type: 'fill',
		source: countryName,
		layout: {},
		paint: {
			'fill-color': '#FFAA01',
			'fill-opacity': 0.2
		}
	};

	const borderLayer: LineLayerSpecification = {
		id: 'outline',
		type: 'line',
		source: countryName,
		layout: {},
		paint: {
			'line-color': '#FFAA01',
			'line-width': 0.8
		}
	};
	map.addSource(countryName, src);
	map.addLayer(areaLayer)
	//.addLayer(borderLayer);
}

export function addMarkers(map: Map, markers: MapMarker[]){
	markers.map((marker) => {
		const lng= marker.coordinates.lng
		const lat = marker.coordinates.lat
		const coordinates: [number, number] = [lng, lat]
		const mk = new Marker().setLngLat(coordinates).addTo(map);
		// mk.getElement().addEventListener('click', () => {
		// 	new Popup().setLngLat(coordinates)
		// 	.setHTML('<h1>Hello World!</h1>')
		// 	.addTo(map);
		// })
	})
}