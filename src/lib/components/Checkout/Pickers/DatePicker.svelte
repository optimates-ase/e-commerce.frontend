<script lang="ts">
	import { orders } from '$lib/stores';
	import type { Order } from '$lib/types';

	let date: string | undefined;
	export let tour_id: string;

	orders.subscribe((orderList) => {
		date = orderList.find((order) => order.tour_id === tour_id)?.date;
	});

	$: {
		orders.update((orderList) => {
			return orderList.map((order) => {
				if (order.tour_id === tour_id) {
					return {
						...order,
						date: date
					};
				}
				return order;
			});
		});
	}

	function handleDateInput(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		const inputValue = inputElement.value;
		date = new Date(inputValue).toISOString().split('T')[0];
	}
</script>

<div>
	<input
		class="input"
		value={date}
		type="date"
		id=""
		name="date_of_tour"
		required
		on:input={handleDateInput}
	/>
</div>
