<script>
	import Map from '$comp/Map/Map.svelte';
	import Navbar from '$comp/Navigation/Navbar.svelte';
	import Selection from '$comp/Selection.svelte';
	import ChooseUs from '$comp/ChooseUs.svelte';
	import CardsComponent from '$comp/Cards/CardsComponent.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data;
	let countryName = 'Belize';
	let features = 'something';
</script>

<div class="app">
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<!-- Router Slot -->
		<div class="app">
			<Selection />
			<Map {countryName} {features} />
			<CardsComponent />
			<CardsComponent />
			<ChooseUs />
		</div>
		<!-- ---- / ---- -->
		<svelte:fragment slot="footer">
			<Navbar />
		</svelte:fragment>
	</AppShell>
</div>

<style>
	.app {
		text-align: center;
	}
	:global(body) {
		background-image: url('src/images/BGLine.svg');
	}
</style>
