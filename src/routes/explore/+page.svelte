<script lang="ts">
	import Explore from '$comp/Explore/ExploreCard.svelte';
	import ExploreContainer from '$comp/Explore/ExploreContainer.svelte';

	import type { Tour } from '$lib/types';

	export let data;
	let tours: Tour[] | [];
	$: tours = data.tours;
</script>

<ExploreContainer {tours} />

<style>
</style>
