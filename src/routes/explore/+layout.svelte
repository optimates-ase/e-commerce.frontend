<!--
TESTING:
svelte transitions for page change.

<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	console.log($page.url);
</script>

{#key $page.url.pathname}
	<div in:fly={{ x: 200, duration: 1000, delay: 1000 }} out:fly={{duration:1000}}>
		<slot />
	</div>
{/key}
    
-->
