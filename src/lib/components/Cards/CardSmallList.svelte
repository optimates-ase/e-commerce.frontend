<script lang="ts">
	import type { Tour } from '$lib/types';
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	// representation
	export let tourList: Tour[] | [];
</script>

<div class="p-8">
	{#each tourList as tour (tour._id)}
		<div class="p-2">
			<CardSmall {tour} />
		</div>
	{/each}
</div>
