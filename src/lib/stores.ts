import { writable, type Writable } from "svelte/store";

export const selectedDistrict: Writable<string> = writable("");