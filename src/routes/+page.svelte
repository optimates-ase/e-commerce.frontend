<script lang="ts">
	import SmallMap from '$lib/Map/SmallMap.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	
	import 'aframe';
	import 'aframe-svelte';


	export let data;
</script>

<div class="h-3/5">
	<a-scene embedded>
		<a-sky src="bg/secret_beach_v1.jpg" rotation="0 -65 0" />
		<a-text
			font="kelsonsans"
			value="Welcome to\nSecret Beach, Belize"
			width="6"
			position="-1 3.5 -3.25"
			rotation="0 15 0"
		/>
	</a-scene>
</div>

<div class="grid gap-4 grid-cols-6 m-4 p-2 h-1/3 ">
	<div class="card col-span-4 p-2" ><h2>Hello World</h2></div>
	<div class="card col-span-2"><SmallMap countryName={data.countryName} features={data.districts} /></div>
</div>

<!-- <p>
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
		<button class="btn bg-primary-900 btn-lg"on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</p> -->
