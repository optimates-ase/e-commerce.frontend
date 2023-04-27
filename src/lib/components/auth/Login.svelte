<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div class="h-full flex items-center justify-center w-full max-w-md">
	<div id="LoginContainer" class="card flex flex-col m-4 h-90 w-full">
		<!-- <div>01</div>
        <div>02</div>
        <div>03</div> -->
		<header>
			<div class="w-max">
				<h1 class="m-8">Login</h1>
			</div>
			<img src="illustration/LoginImg.svg" class="m-8"/>

			{#if $page.data.session}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? 'User'}</strong>
				</span>
			{:else}
				<div class="mx-8 text-center">

					<p>Currently not signed in</p>
				</div>
			{/if}
		</header>

		<div id="authControls" class="m-auto">

			
			<button type="button" class="btn variant-filled-primary w-56 mb-10 mt-4" on:click={() => signIn()}>
				<span>Login with Google</span>
				<span>(icon1)</span>
			</button>
		</div>
	</div>
</div>
