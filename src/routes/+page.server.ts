import type { Country } from '$lib/types';
import countryData from '$lib/data/Belize.json';
import countryClimate from '$lib/data/Belize.weather.json';

export const load = async () => {

	const fetchMapCountryData = async () => {
		// TODO use environment variable instead of localhost
		const geosRes = await fetch("http://localhost:8000/geos/districts/");
		const geosData = await geosRes.json();
		return geosData.data;
	}

	const countryName = countryData.name;

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
			boundaries: countryData.mapConfig.mapBoundaries,
			zoom: countryData.mapConfig.zoom
		},
		carouselImg: countryData.carouselImages,
		climateInfluenceMinor: {
			name: "Temperature",
			max: countryClimate.minorInfluence.max,
			min: countryClimate.minorInfluence.min
		},
		markedCities: countryData.populationHotspots,
	};

	let countryMap = fetchMapCountryData();
	
	
	return { country: country, countryName: countryName, countryMap: countryMap };
};
