<script lang="ts">
	import { stripe } from '$lib/stripe';
	import type { FinalOrder, Order, Tour } from '$lib/types';
	import { onMount } from 'svelte';
	import Collapser from '$comp/UIUX/Collapser.svelte';
	import { orders } from '$lib/stores';

	export let price: number;
	export let tourList: Tour[];

	let ordersList: Order[];
	let currency = 'usd';
	let expanded: boolean;

	let disabledPayment: boolean;
	$: {
		disabledPayment = $orders.some((order: Order) => !order.provider_id || !order.date);
	}

	const proceedeWithPayment = () => {
		if (!expanded) {
			expanded = true;
			return undefined;
		}

		const finalOrder: FinalOrder = {
			user_id: 'placeholder',
			orders: $orders,
			payed: false
		};

		submitPayment();
	};

	// Payment Variables
	const api = 'http://localhost:5173/api/payment';

	let elements = stripe?.elements();

	let card: any;
	let cardElement: any;
	let complete = false;
	let paymentIntent: any;
	let clientSecret: any;

	onMount(() => {
		orders.subscribe((orders) => (ordersList = orders));
		paymentIntent = createIntent();
		clientSecret = paymentIntent.client_secret;
		createCardForm();
	});

	//API

	const createIntent = async () => {
		console.log(price);
		const data = { price };
		const response = await fetch('/api/payment/intents', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		console.log(response.json());

		return response.json();
	};

	const createCardForm = async () => {
		cardElement = elements?.create('card');
		cardElement?.mount(card);
		cardElement?.on('change', (e: any) => (complete = e.complete));
	};

	const submitPayment = async () => {
		const result = await stripe?.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardElement,
				billing_details: {
					name: 'Jenny Rosen'
				}
			}
		});

		paymentIntent = result?.paymentIntent;

		console.log(paymentIntent);

		if (result?.error) {
			console.error(result.error);
			alert('We ran into an error!');
		}
	};
</script>

<div class="bg-surface-700 bg-inherit p-5 w-full">
	<Collapser bind:expanded expandAbove={true}>
		<span slot="expanded">
			<h2 class="mb-3">Purchase Overview</h2>
			<div class="text-gray-500 font-mono p-3">
				Recap:
				<div class="m-2">
					{#each tourList as tour (tour._id)}
						<div class="flex justify-between">
							<div>{tour.name}</div>
							<div>$ {tour.price}</div>
						</div>
					{/each}
				</div>
			</div>
		</span>
	</Collapser>

	<div class="elements" bind:this={card} />

	<div class="flex justify-between items-center w-full">
		<div class="flex items-end">
			<div class="mx-3 mb-1">Total:</div>
			<div class="font-mono text-2xl">
				{price}
				{currency.toUpperCase()}
			</div>
		</div>
		<button
			disabled={disabledPayment}
			class="btn variant-filled-primary"
			on:click={() => {
				proceedeWithPayment();
			}}
		>
			Purchase
		</button>
	</div>
</div>
