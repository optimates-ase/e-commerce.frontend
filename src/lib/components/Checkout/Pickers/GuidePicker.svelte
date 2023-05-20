<script lang="ts">
	export let guides: string[];

	let selected = '';

	const handleClick = (guide: string) => {
		selected = guide;
	};
</script>

<div class="flex flex-wrap gap-5 mt-5 mb-8">
	{#each guides as guide}
		<button on:click={() => handleClick(guide)}>
			<div
				class={`flex flex-col items-center w-24 h-24 border ${
					selected === guide ? 'border-red-500' : 'border-slate-400'
				}`}
			>
				<img src="/icons/user.svg" alt="User svg" class="h-full w-full" />
				<div class="text-center justify-end">{guide}</div>
			</div>
		</button>
	{/each}
</div>
