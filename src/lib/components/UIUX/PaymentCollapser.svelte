<script lang="ts">
	import type { StripeElements } from '@stripe/stripe-js';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	// initial value
	export let expanded = false;

	export let elements: StripeElements | undefined;
	export let card;

	const up = '/icons/chevron-up.svg';
	const down = '/icons/chevron-down.svg';
	let chevron: string = up;

	const slideParams = {
		delay: 100,
		duration: 400,
		easing: quintOut,
		axis: 'y'
	};

	function handleExpand(): void {
		expanded = !expanded;
		chevron = expanded ? down : up;
	}
</script>

<button class="rounded w-full flex flex-row justify-center" on:click={() => handleExpand()}>
	<img src={chevron} alt="chevrons" />
</button>

{#if expanded}
	<div
		transition:slide={{
			delay: 100,
			duration: 400,
			easing: quintOut,
			axis: 'y'
		}}
	/>
{/if}
