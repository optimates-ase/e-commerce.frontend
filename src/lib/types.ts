import type { Feature } from 'maplibre-gl';

interface Coordinate {
	[0]: number;
	[1]: number;
}

export interface Tour {
	id: string;
	name: string;
	description: string;
	price: number;
	currency: string;
	rating: string;
	minimum: number;
	images: [string];
}

export interface DistrictProperties {
	id: string;
	name: string;
	tours: Tour[] | [];
}

export interface DistrictNavProperties {
	id: string;
	slug: string;
	dispName: string;
	keywords: string[];
}
