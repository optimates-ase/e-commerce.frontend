<script lang="ts">
	import { orders } from '$lib/stores';
	import type { Order, Provider } from '$lib/types';

	export let providers: Provider[] | [];
	export let tour_id: string;

	let selected: string | undefined;

	orders.subscribe((orderList) => {
		selected = orderList.find((order: Order) => order.tour_id === tour_id)?.provider_id;
	});

	$: {
		orders.update((orderList) => {
			return orderList.map((order) => {
				if (order.tour_id === tour_id) {
					return {
						...order,
						provider_id: selected
					};
				}
				return order;
			});
		});
	}

	const handleClick = (guideID: string) => {
		selected = guideID;
	};
</script>

<div class="flex flex-wrap gap-5">
	{#each providers as guide}
		<button on:click={() => handleClick(guide._id)}>
			<div
				class={`flex flex-col items-center w-24 h-24 border ${
					selected === guide._id ? 'border-red-500' : 'border-slate-400'
				}`}
			>
				<img src="/icons/user.svg" alt="User svg" class="h-full w-full" />
				<div class="text-center justify-end">{guide.firstName} {guide.lastName}</div>
			</div>
		</button>
	{/each}
</div>
