interface Coordinate {
	lng: number;
	lat: number;
}

interface MapConfig {
	coordinates: Coordinate;
	zoom: number;
}

interface MinorInfluence {
	avg: number;
	month: string;
	unit: string;
}

interface Img {
	src: string;
	altText: string;
}

export interface ClimateInfluenceMinor {
	name: string;
	max: MinorInfluence;
	min: MinorInfluence;
}

export interface MapMarker {
	name: string;
	population: number;
	capital: boolean;
	coordinates: Coordinate;
}

export interface CarouselImg {
	id: string;
	imgs: Img[];
}

export interface Feature {
	type: string;
	properties: {
		GID_1: string;
		GID_0: string;
		COUNTRY: string;
		NAME_1: string;
		TYPE_1: string;
		HASC_1: string;
		ISO_1: string;
	};
	geometry: {
		type: string;
		coordinates: number[][][][];
	};
}

export interface FeatureCollection {
	type: string;
	name: string;
	crs: any;
	features: Feature[];
}

export interface District {
	id: string;
	name: string;
	keyphrase: string;
}

export interface Country {
	name: string;
	hook: string;
	catchPhrase: string;
	districts: District[];
	keywords: string[];
	keyphrase: string;
	mapConfig: MapConfig;
	geoJSON: FeatureCollection;
	carouselImg: CarouselImg[];
	climateInfluenceMinor: ClimateInfluenceMinor;
	markedCities: MapMarker[];
}
export interface Tour {
	id: number;
	name: string;
	description: string;
	price: number;
	currency: string;
	rating: string;
	minimum: number;
	images: string[];
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

export interface Marker {}
