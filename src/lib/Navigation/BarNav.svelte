
<script>
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
    let tabsBottomNav = 0;
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<Tab bind:group={tabsBottomNav} name="Home" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
        Home
	</Tab>
    <Tab bind:group={tabsBottomNav} name="Explore" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
        Explore
	</Tab>
    <Tab bind:group={tabsBottomNav} name="My" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
        My
	</Tab>
	<!-- ... -->
</TabGroup>