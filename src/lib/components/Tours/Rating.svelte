<script lang="ts">
	import StarRating from 'svelte-star-rating';
	export let rating: number;
	export let num_of_ratings: number;

	const displayExact = () => {
		console.log('hovering');
	};
</script>

<div class="flex items-baseline">
	<StarRating {rating} on:click={displayExact} />
	<div class="text-xs m-2">({num_of_ratings}) </div>
</div>
