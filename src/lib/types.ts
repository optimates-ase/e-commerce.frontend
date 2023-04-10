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
    id: string,
    name: string,
    tours: Tour[] | [],
}

export interface DistrictNavProperties {
    id: string
    slug: string,
    dispName : string,
    keywords: string[],
}
