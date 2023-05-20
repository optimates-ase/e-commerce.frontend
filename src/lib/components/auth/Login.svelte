<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="h-full flex items-center justify-center h-full w-full max-w-md">
	<div id="LoginContainer" class="card flex flex-col m-4 h-90 w-full">
		<header>
			<div class="w-max">
				<h1 class="m-8">Login</h1>
			</div>
			<img src="/illustration/LoginImg.svg" class="m-8" alt="Login" />
		</header>

		<div id="authControls" class="m-auto">
			<button
				type="button"
				class="btn variant-filled-primary w-56 mb-10 mt-4"
				on:click={() => signIn()}
			>
				<span>Login with Google</span>
				<span><img src="icons/google.svg" alt="Google Icon" /></span>
			</button>
		</div>
	</div>
</div>
