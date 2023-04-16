<script>
	// The selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import BarNav from '$comp/Navigation/BarNav.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">(OptiMates)</a></svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<BarNav />
	</svelte:fragment>
</AppShell>
