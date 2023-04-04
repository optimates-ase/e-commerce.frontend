import { writable } from "svelte/store";

export const cardTitle = writable<string>("");
export const cardContent = writable<string>("");

