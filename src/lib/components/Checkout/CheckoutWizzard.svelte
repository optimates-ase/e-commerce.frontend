<script lang="ts">
	import DatePicker from './Pickers/DatePicker.svelte';
	import GuidePicker from './Pickers/GuidePicker.svelte';

	const steps = [
		{ title: 'Pick a Date', content: DatePicker, props: { name: 'hello' } },
		{
			title: 'Pick a Guide',
			content: GuidePicker,
			props: { guides: ['Andy', 'Filip', 'Alberto', 'Ali', 'David'] }
		}
	];

	let wizzard = 0;
	let component = steps[wizzard].content;
	let props = steps[wizzard].props;
	let title = steps[wizzard].title;
	$: {
		component = steps[wizzard].content;
		props = steps[wizzard].props;
		title = steps[wizzard].title;
	}

	function nextStep() {
		if (wizzard < steps.length - 1) {
			wizzard += 1;
		}
	}

	function previousStep() {
		if (wizzard > 0) {
			wizzard -= 1;
		}
	}
</script>

<div>
	<h3>{title}</h3>

	<svelte:component this={component} {...props} />

	{#if wizzard > 0}
		<div class="flex justify-start">
			<button class="btn" on:click={previousStep}>
				<img src="/icons/chevron-left.svg" alt="Chevron Left" />
			</button>
		</div>
	{/if}
	{#if wizzard < steps.length - 1}
		<div class="flex justify-end">
			<button class="btn" on:click={nextStep}>
				<img src="/icons/chevron-right.svg" alt="Chevron Right" />
			</button>
		</div>
	{/if}
</div>
