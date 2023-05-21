<script>
	let stripe = Stripe('pk_test_m3a5moXVKgThpdfwzKILvnbG');

	// REPLACE with your Firebase Project ID
	let api = 'http://localhost:5000/awesomeapp-dev/us-central1/payments';

	export let amount;
	export let name;

	// Payment Intents

	import { onMount } from 'svelte';

	let elements = stripe.elements();
	let card; // HTML div to mount card
	let cardElement;
	let complete = false;

	let paymentIntent;
	let clientSecret;

	onMount(async () => {
		paymentIntent = await createIntent();
		clientSecret = paymentIntent.client_secret;
		createCardForm();
	});

	// Step 1
	async function createIntent() {
		const url = api + '/intents';
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount, name })
		};
		return (await fetch(url, params)).json();

		console.log(paymentIntent);
	}

	// Step 2
	async function createCardForm() {
		cardElement = elements.create('card');
		cardElement.mount(card);

		cardElement.on('change', (e) => (complete = e.complete));
	}

	// Step 3
	async function submitPayment() {
		const result = await stripe.handleCardPayment(clientSecret, cardElement, {
			payment_method_data: {}
		});

		paymentIntent = result.paymentIntent;

		console.log(paymentIntent);

		if (result.error) {
			console.error(error);
			alert('Something went wrong!');
		}
	}
</script>

<section>
	<h2>Payment Intents with Stripe Elements</h2>

	<i>⌚</i>

	<div class="elements" bind:this={card} />

	<button on:click={submitPayment} disabled={!paymentIntent || !complete}>
		Submit Payment for ${amount / 100}
	</button>
</section>
