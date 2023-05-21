import type { ObjectId } from "mongodb";

export interface Address {
	street: string;
	// TODO streetNumber should be a number requires update in $comp/Forms/Address.svelte
	streetNumber: string;
	streetNoExtra?: string;
	zipCode: string;
	city: string;
	country: string;
	validFrom: Date;
	validTo?: Date;
}

export interface User {
	_id: ObjectId | string;
	firstName: string;
	lastName: string;
	birthdate: Date;
	email: string;
	phone: string;
	billingAddress?: Address;
	residenceAddress?: Address;
}

export interface Coordinate {
	lng: number;
	lat: number;
}

export interface MapBoundries {
	maxLng: number;
	minLng: number;
	maxLat: number;
	minLat: number;
}

interface MapConfig {
	coordinates: Coordinate;
	mapBoundaries: MapBoundries;
	zoom: number;
}

export interface Activity {
	name: string;
	icon: string;
}

interface Temperature {
	avg: number,
	unit: string,
	month: string,
	icon: string
}

interface MinorInfluence {
	min: Temperature
	max: Temperature
}

interface Img {
	src: string;
	altText: string;
}

export interface Highlight {
	id: number;
	name: string;
	icon: string;
	thumbnail: string;
	keyExpression: string[];
}

export interface ClimateInfluence {
	name: string;
	mainInflunece: string;
	minorInfluence: MinorInfluence;
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
	map: string;
	keyphrase: string;
	activities: Activity[];
	highlights: Highlight[];
}

export interface Country {
	name: string;
	hook: string;
	initialMapDescription: string;
	catchPhrase: string;
	districts: District[];
	keywords: string[];
	keyphrase: string;
	mapConfig: MapConfig;
	climateInfluenceMinor: ClimateInfluence;
	markedCities: MapMarker[];
}
export interface Tour {
	_id: string;
	name: string;
	description: string;
	price: number;
	currency: string;
	rating: number;
	num_of_ratings: number;
	min_of_participants: number;
	tags?: Tag[];
	minimum?: number;
	language_offered?: string;
	images: string[];
}

export enum Tag {
	Adventure = 'Adventure',
	Sightseeing = 'Sightseeing',
	Relaxation = 'Relaxation',
	Nature = 'Nature',
	Cultural = 'Cultural',
	Wildlife = 'Wildlife'
}
