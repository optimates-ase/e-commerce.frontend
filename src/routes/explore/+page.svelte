<script lang="ts">
	import CheckoutButton from '$comp/Explore/CheckoutButton.svelte';
	import Explore from '$comp/Explore/ExploreCard.svelte';
	import ExploreContainer from '$comp/Explore/ExploreContainer.svelte';

	import type { Tour } from '$lib/types';

	let tours: Tour[] | [];
	export let data;
	tours = data.data.data;
</script>
<svelte:head>
	<title>OptiMates - Explore Tours</title>
</svelte:head>

{#await data}
	<div class="flex justify-center items-center">
		<p>Loading...</p>
	</div>
{:then data}
	<ExploreContainer {tours} />

	<div class="fixed bottom-14 right-0 p-4 z-10">
		<CheckoutButton />
	</div>
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style>
</style>
