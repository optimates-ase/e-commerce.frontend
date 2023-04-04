<script>
	import { FileDropzone } from '@skeletonlabs/skeleton';
	let files;
</script>

<label class="label p-4">
    <div>
        <h1>Welcome, name</h1>
        <p>Choose a user name upload an avatar picture</p>
    </div>
	<div class="grid items-center">
		<div class="justify-center p-4">
			<span>Username</span>
			<input type="text" id="username" />
		</div>
		<div class="m-4">
			<FileDropzone bind:files>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="message">(message)</svelte:fragment>
				<svelte:fragment slot="meta">(meta)</svelte:fragment>
			</FileDropzone>
		</div>
		<div class="grid justify-end">
			<button type="button" class="btn variant-filled">Explore</button>
		</div>
	</div>
</label>
