<script lang="ts">
	import CheckoutButton from '$comp/Explore/CheckoutButton.svelte';
	import ExploreContainer from '$comp/Explore/ExploreContainer.svelte';
	import type { Tour } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;
	let tours: Tour[] = data.randomTours;

	function handleShortage(): void {
		throw new Error('Function not implemented.');
	}
</script>

{#await data}
	<div class="flex justify-center items-center">
		<p>Loading...</p>
	</div>
{:then data}
	{#if tours.length == 0}
		<div class="flex flex-col justify-center items-center h-full">
			<img src="/icons/frown.svg" alt="" />
			<div>Oops, no tours found!</div>
		</div>
	{:else}
		<ExploreContainer {tours} on:shortage={() => handleShortage()} />

		<div class="fixed bottom-14 right-0 p-4 z-10">
			<CheckoutButton />
		</div>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style>
</style>
