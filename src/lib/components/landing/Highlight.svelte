<script lang="ts">
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	export let icon: string;
	export let keyExpressions: string[] | undefined;

	const alert: ModalSettings = {
		type: 'alert',
		title: 'Example Alert',
		body: 'This is an example modal.',
		image: 'https://i.imgur.com/WOgTG96.gif'
	};

    modalStore.trigger(alert);
</script>
