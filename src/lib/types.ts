import type { Feature } from "maplibre-gl"

interface Coordinate {
    [0]: number,
    [1]: number,
}


interface Tour{
    id: string,
    description: string,
    price: number
}

export interface DistrictProperties {
    name: string,
    tours: Tour[] | [],
}


interface District {
    type: string
    properties: DistrictProperties,
    coordinates: Coordinate[]
}

export interface CountryPolygon {
    type: string,
    name: string,
    features: District[],
}