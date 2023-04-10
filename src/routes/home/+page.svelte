<script>
	import Map from '../components/Map.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Selection from '../components/Selection.svelte';
	import ChooseUs from '../components/ChooseUs.svelte';
	import CardsComponent from '../components/CardsComponent.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Map from '../../components/Map.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import { AppShell, dataTableHandler } from '@skeletonlabs/skeleton';
	import CardsComponent from '../../components/CardsComponent.svelte';

	export let data;
</script>

<div class="app">
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<!-- Router Slot -->
		<div class="app">
			<Selection />
			<Map />
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
