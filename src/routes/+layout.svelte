<script>
	// The seslected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import BarNav from '$comp/Navigation/BarNav.svelte';
	import { Modal } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { goto } from '$app/navigation';
</script>

<Modal />

<AppShell class="bg-[url('./images/BGLine.svg')]">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button 
				class="logo w-48 h-10"
				></button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.data.session}
					<button
						type="button"
						class="btn variant-filled-primary"
						on:click={() => {
							signOut();
							goto('/logout');
						}}
					>
						Logout
					</button>
				{:else}
					<button
						type="button"
						class="btn variant-filled-primary"
						on:click={() => {
							signIn();
						}}
					>
						Login
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<slot />
	
	<svelte:fragment slot="footer">
		<BarNav />
	</svelte:fragment>
</AppShell>

<style>
	.logo {
		background-image: url('/logo/logo_v1.png');
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
