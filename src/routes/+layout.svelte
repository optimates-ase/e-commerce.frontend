<script>
	// The selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/Navigation/Navigation.svelte';
	import BarNav from '$lib/Navigation/BarNav.svelte';
	import Navbar from '$comp/Navbar.svelte';
</script>

<AppShell class="app-shell">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">(OptiMates)</a></svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->

	<svelte:fragment slot="pageFooter">
		<Navbar />
	</svelte:fragment>
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
