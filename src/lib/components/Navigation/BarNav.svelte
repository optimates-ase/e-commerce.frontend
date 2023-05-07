<script lang="ts">
	import { goto } from '$app/navigation';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import type { Page } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let tab: number | undefined = 0;

	const pathMapping = (path: string | undefined) => {
		switch (path) {
			case '':
				return 0;
			case 'explore':
				return 1;
			case 'profile':
				return 2;
			default:
				return -1;
		}
	};

	const unsubscribe = page.subscribe((page) => {
		let route = page.route.id;
		tab = pathMapping(route?.split('/')[1]);
	});

	const handleRedirect = (link: string) => {
		if (link) {
			goto(link);
		} else {
			throw Error;
		}
	};
	onDestroy(() => {
		unsubscribe();
	});
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
	<Tab bind:group={tab} name="Home" value={0} on:click={() => handleRedirect('/')}>
		<svelte:fragment slot="lead">
			<img class="block mx-auto" src="icons/home.svg" alt="home icon" />
		</svelte:fragment>
		<p class="text-center">Home</p>
	</Tab>
	<Tab bind:group={tab} name="Explore" value={1} on:click={() => handleRedirect('/explore')}>
		<svelte:fragment slot="lead">
			<img class="block mx-auto" src="icons/compass.svg" alt="compass icon" />
		</svelte:fragment>
		<p class="text-center">Explore</p>
	</Tab>
	<Tab bind:group={tab} name="My" value={2} on:click={() => handleRedirect('/profile')}>
		<svelte:fragment slot="lead">
			<img class="block mx-auto" src="icons/users.svg" alt="users icon" />
		</svelte:fragment>
		<p class="text-center">My</p>
	</Tab>
</TabGroup>

<style>
	.tab {
		@apply flex flex-col justify-center;
	}
</style>
