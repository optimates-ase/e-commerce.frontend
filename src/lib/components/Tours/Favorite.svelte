<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Star from './Star.svelte';

	const dispatch = createEventDispatcher();

	export let favorite = false;

	const getStyling = () => {
		if (!favorite) {
			return 'fill-white stroke-slate-400';
		} else {
			return 'fill-yellow-500 stroke-yellow-600';
		}
	};

	const toggle = () => {
		favorite = !favorite;
		alert(favorite);
		dispatch('favorited')
	};
</script>

<div on:click={toggle} class="hover:bg-black">
	<Star fill={getStyling()} />
</div>
