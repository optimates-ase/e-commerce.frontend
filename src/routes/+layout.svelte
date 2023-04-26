<script>
	// The selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import BarNav from '$comp/Navigation/BarNav.svelte';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	// import  type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<Modal />

<AppShell class="bg-[url('./images/BGLine.svg')]">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">(OptiMates)</a></svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.data.session}
					<button
						type="button"
						class="btn variant-filled-primary"
						on:click={() => {
							signOut();
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
