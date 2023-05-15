import type { Country } from '$lib/types';
import { geoJSONCollection } from '$db/collections/geos';
import countryData from '$lib/data/Belize.json';
import countryClimate from '$lib/data/Belize.weather.json';
import { json } from '@sveltejs/kit';

export const load = async () => {

	const fetchMapCountryData = async () => {

		const test = (await geoJSONCollection.find({name: "gadm41_BLZ_1"}).toArray()).map((el) =>{
			let {_id, ...geoJSON} = el 
			return geoJSON});
		return test[0];
	}

	const countryName = countryData.name;

	const country: Country = {
		name: countryData.name,
		hook: countryData.hook,
		initialMapDescription: countryData.initialMapDescription,
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
