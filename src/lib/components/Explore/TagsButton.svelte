<script lang="ts">
	import { favorites } from '$lib/stores';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import ModalComponentExp from '$comp/Explore/ModalComponentExp.svelte';


	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: ModalComponentExp };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}
</script>




<div class="flex justify-center w-full">
	<button class="btn variant-filled-primary relative" on:click={modalComponentForm}>
		Tags
	</button>
</div>
