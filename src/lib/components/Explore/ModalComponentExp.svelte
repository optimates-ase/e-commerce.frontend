<script lang="ts">
	let regions: Record<string, boolean> = {
		Belize: true,
		Cayo: true,
		Corozal: true,
		'Orange Walk': true,
		'Stann Creek': true,
		Toledo: true
	};

	function filterReg(flavor: string): void {
		regions[flavor] = !regions[flavor];
	}

	let experinces: Record<string, boolean> = {
		adventure: true,
		sightseeing: true,
		relaxation: true,
		nature: true,
		cultural: true,
		wildlife: true
	};

	function filterExp(flavor: string): void {
		experinces[flavor] = !experinces[flavor];
	}
</script>

<div class="card p-4">
	<div class="mb-5">
		<h2 class="mx-2 mt-1">Regions</h2>
		<div class="mx-2 mb-5 text-gray-500 text-xs">Select your regions of interest</div>
		<div class="mx-2">
			{#each Object.keys(regions) as f}
				<span
					class="chip {regions[f] ? 'variant-filled' : 'variant-soft'} m-1"
					on:click={() => {
						filterReg(f);
					}}
					on:keypress
				>
					<span class="capitalize">
						<div class="text-xs">{f}</div>
					</span>
				</span>
			{/each}
		</div>
	</div>

	<div class="mb-5">
		<h2 class="mx-2 mt-1">Experince</h2>
		<div class="mx-2 mb-5 text-gray-500 text-xs">Select your type of experince</div>
		<div class="mx-2">
			{#each Object.keys(experinces) as f}
				<span
					class="chip {experinces[f] ? 'variant-filled' : 'variant-soft'} m-1"
					on:click={() => {
						filterExp(f);
					}}
					on:keypress
				>
					<span class="capitalize">
						<div class="text-xs">{f}</div>
					</span>
				</span>
			{/each}
		</div>
	</div>
</div>
