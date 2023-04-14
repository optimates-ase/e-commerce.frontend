import type { Country, DistrictProperties } from '$lib/types';
import featureCollection from '$lib/data/Belize.gadm1.geo.json';
import countryData from '$lib/data/Belize.json';
import countryClimate from '$lib/data/Belize.weather.json';
import { Map } from 'maplibre-gl';

export const load = async () => {
	const countryName = countryData.name;
	const features = featureCollection.features;
	const initialState = { lng: -88.65292533421297, lat: 16.95, zoom: 6 };
	const apiKey = 'R7SWIU6LxTG0LcVb5eyr';
	const mapStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`;

	const country: Country = {
		name: countryData.name,
		hook: countryData.hook,
		catchPhrase: countryData.catchPhrase,
		districts: countryData.districts,
		keywords: countryData.keywords,
		keyphrase: countryData.keyphrase,
		mapConfig: {
			coordinates: {
				lat: countryData.mapConfig.lat,
				lng: countryData.mapConfig.lng
			},
			zoom: countryData.mapConfig.zoom
		},
		geoJSON: featureCollection,
		carouselImg: countryData.carouselImages,
		climateInfluenceMinor: {
			name: "Temperature",
			max: countryClimate.minorInfluence.max,
			min: countryClimate.minorInfluence.min
		},
		markedCities: countryData.populationHotspots,
	};

	const districts = features.map((dis) => {
		const props: DistrictProperties = {
			id: dis.properties.GID_1,
			name: dis.properties.NAME_1,
			tours: []
		};
		const district = {
			type: 'Feature',
			properties: props,
			geometry: dis.geometry
		};

		return district;
	});

	return { country: country, countryName: countryName, districts: districts };
};
