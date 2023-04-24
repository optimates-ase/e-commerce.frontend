/** @type {import('./$types').PageLoad} */

import type { CountryPolygon, DistrictProperties } from '$lib/types';

// maybe use in store, this data is loaded twice.
import data from '$lib/data/Belize.gadm1.geo.json';

export const load = async () => {
	const countryName = data.features[0].properties.COUNTRY;
	const features = data.features;
	const districts = features.map((dis) => {
		const props: DistrictProperties = {
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

	return { countryName: countryName, districts: districts };
};
