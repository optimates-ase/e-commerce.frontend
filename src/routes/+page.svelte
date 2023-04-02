<script lang="ts">
	import Map from '$lib/Map/Map.svelte';
	export let data;
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div class="p-2 max-w-sm">
	<div class="items-center">
		<h1>SvelteKit Auth Example</h1>
		<p>
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
				{/if}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? 'User'}</strong>
				</span>
				<button on:click={() => signOut()} class="button">Sign out</button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<button on:click={() => signIn('github')}>Sign In with GitHub</button>
			{/if}
		</p>
	</div>
</div>
