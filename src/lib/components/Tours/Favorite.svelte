<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Star from './Star.svelte';

	const dispatch = createEventDispatcher();

	export let favorite = false;
	let starStyle: string;

	$: {
		starStyle = favorite ? 'fill-yellow-500 stroke-yellow-600' : 'fill-white stroke-slate-400';
	}

	const toggle = () => {
		favorite = !favorite;
		dispatch('favorited');
	};
</script>

<div>
	<button on:click={toggle} class="pointer-events-auto">
		<Star fill={starStyle} />
	</button>
</div>

<style>
</style>
