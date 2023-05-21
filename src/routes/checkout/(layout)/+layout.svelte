<script lang="ts">
	import Payment from '$comp/Payment/Payment.svelte';
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		if (value.length <= 0) {
			if (browser) {
				goto('/explore');
			}
		}
		tourList = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	let price: number = 0;
	$: {
		price = 0;
		tourList.forEach((tour) => {
			price += tour.price;
		});
	}
</script>

<div class="flex flex-col flex-grow w-full min-h-full">
	<body>
		<slot />
	</body>

	<footer class="sticky bottom-0 mt-auto">
		<Payment {tourList} {price} />
	</footer>
</div>
