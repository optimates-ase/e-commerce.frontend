<script>
	// The selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';

	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Navigation from '$lib/Navigation/Navigation.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">(Home)</a></svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft" > <Navigation /></svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
