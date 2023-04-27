<script lang="ts">
	import StarRating from 'svelte-star-rating';
	export let rating: number;
	export let num_of_ratings: number;

	const displayExact = () => {
		console.log('hovering');
	};
</script>

<div class="flex justify-start sm:gap-2 flex-col sm:flex-row">
	<StarRating {rating} on:click={displayExact} />
	<div>{num_of_ratings} Ratings</div>
</div>
