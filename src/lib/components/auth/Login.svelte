<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div class="h-full flex items-center justify-center">
	<div id="LoginContainer" class="card flex flex-col m-4 max-w-2xl h-full">
		<!-- <div>01</div>
        <div>02</div>
        <div>03</div> -->
		<header>
			<div class="w-max">
				<h1>Login</h1>
			</div>
			<img src="bg/Candidate1.jpg" />

			{#if $page.data.session}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? 'User'}</strong>
				</span>
			{:else}
				<p>not signed in</p>
			{/if}
		</header>

		<div id="authControls" class="m-auto">

			
			<button type="button" class="btn variant-filled-surface w-56" on:click={() => signIn()}>
				<span>Login with Google</span>
				<span>(icon1)</span>
			</button>
		</div>
	</div>
</div>
