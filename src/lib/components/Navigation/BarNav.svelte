<script lang="ts">
	import { goto } from '$app/navigation';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';

	import { writable, type Writable } from 'svelte/store';

	const tabSet: Writable<number> = writable(0);
</script>

<!-- TODO highlighting of current does not fully work, when user is being redirected -->

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<Tab bind:group={$tabSet} name="Home" value={0} on:click={() => goto('/')}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		Home
	</Tab>
	<Tab bind:group={$tabSet} name="Explore" value={1} on:click={() => goto('/explore')}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		Explore
	</Tab>
	<Tab bind:group={$tabSet} name="My" value={2} on:click={() => goto('/profile')}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		My
	</Tab>
</TabGroup>
