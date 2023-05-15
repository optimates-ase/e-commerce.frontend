<script lang="ts">
	import { favorites } from '$lib/stores';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';

	let favCount: Number;
	const unsubscribe = favorites.subscribe((items) => {
		favCount = items.length;
	});

	function handleClick(): void {
		goto('/checkout');
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

{#if favCount}
	<div class="flex justify-center w-full">
		<button class="btn variant-filled-primary relative" on:click={() => handleClick()}>
			Checkout
			<span
				class="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center absolute -top-2 -right-2"
			>
				{favCount}
			</span>
		</button>
	</div>
{/if}
