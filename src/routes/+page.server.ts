/** @type {import('./$types').PageLoad} */

import type { DistrictProperties } from '$lib/types';

// maybe use in store, this data is loaded twice.
import districtData from '$lib/data/Belize.gadm1.geo.json';

export const load = async () => {
	const countryName = districtData.features[0].properties.COUNTRY;
	const features = districtData.features;
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

	return { countryName: countryName, districts: districts };
};
