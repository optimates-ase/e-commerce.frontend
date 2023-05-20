<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let expandAbove: boolean;
	// initial value
	export let expanded = false;

	const up = '/icons/chevron-up.svg';
	const down = '/icons/chevron-down.svg';
	let chevron: string = expandAbove ? up : down;

	const slideParams = {
		delay: 100,
		duration: 400,
		easing: quintOut,
		axis: 'y'
	};

	function handleExpand(): void {
		expanded = !expanded;
		chevron = expandAbove ? (expanded ? down : up) : expanded ? up : down;
	}
</script>

{#if expandAbove}
	<button class="rounded w-full flex flex-row justify-center" on:click={() => handleExpand()}>
		<img src={chevron} alt="chevrons" />
	</button>
{/if}

{#if expanded}
	<div
		transition:slide={{
			delay: 100,
			duration: 400,
			easing: quintOut,
			axis: 'y'
		}}
	>
		<slot name="expanded" />
	</div>
{:else}
	<slot name="collapsed" />
{/if}

{#if !expandAbove}
	<button class="rounded w-full flex flex-row justify-center" on:click={() => handleExpand()}>
		<img src={chevron} alt="chevrons" />
	</button>
{/if}
