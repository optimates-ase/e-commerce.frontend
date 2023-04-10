<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { redirect } from '@sveltejs/kit';
	let tabsBottomNav = 0;

	function redirectTo(link: string) {
		console.log('redirecting to ', link);
		throw redirect(307, link);
	}
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
	<Tab bind:group={tabsBottomNav} name="Explore" value={1}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		Explore
	</Tab>
	<Tab bind:group={tabsBottomNav} name="My" value={2}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		My
	</Tab>
	<!-- ... -->
	<svelte:fragment slot="panel">
		{#if tabsBottomNav === 0}
			{redirectTo('/')}
		{:else if tabsBottomNav === 1}
			{redirectTo('/explore')}
		{:else if tabsBottomNav === 2}
			{redirectTo('/profile')}
		{/if}
	</svelte:fragment>
</TabGroup>
