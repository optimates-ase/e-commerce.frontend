import type { Country } from '$lib/types';
import { geoJSONCollection } from '$db/collections/geos';
import { json } from '@sveltejs/kit';
import { countryInfoCollection } from '$db/collections/countryInfo';
import { countryWeatherCollection } from '$db/collections/countryWeather';

export const load = async () => {
	const jsonify = (el) => {
		const { _id, ...rest } = el;
		return rest;
	};

	const fetchMapCountryData = async () => {
		const data = await geoJSONCollection.findOne({ name: 'gadm41_BLZ_1' });
		return jsonify(data);
	};

	const fetchCountryInfo = async () => {
		const data = await countryInfoCollection.findOne({ name: 'Belize' });
		return jsonify(data);
	};

	const fetchCountryClimateInfo = async () => {
		const data = await countryWeatherCollection.findOne({ name: 'Belize' });
		return jsonify(data);
	};

	const countryMap = await fetchMapCountryData();
	const countryInfo = await fetchCountryInfo();
	const countryWeatherInfo = await fetchCountryClimateInfo();

	return { country: countryInfo, countryMap: countryMap, weatherInfo: countryWeatherInfo };
};
