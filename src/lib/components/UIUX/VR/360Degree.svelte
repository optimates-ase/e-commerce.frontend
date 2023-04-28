<script lang="ts">
	import { browser } from "$app/environment";
</script>
{#if browser}
<a-scene embedded >
	<a-sky src="aframe/san-pedro-beach.jpg" rotation="0 0 0" />
	<a-text
		font="kelsonsans"
		value="Welcome to\nSan Pedro, Belize"
		width="6"
		position="1 4 -4.5"
		rotation="0 -15 0"
	/>
</a-scene>
{/if}