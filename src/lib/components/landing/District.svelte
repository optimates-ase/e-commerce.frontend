<script lang="ts">
	import type { District } from '$lib/types';
	import { Step, Stepper } from '@skeletonlabs/skeleton';

	export let districts: District[];
</script>

<div class="mt-12">
	<Stepper>
		{#each districts as district}
			<Step>
				<svelte:fragment slot="header">
					{district.name}
				</svelte:fragment>
				<body class="h-[450px]">
					<!-- <div class="h-full"> -->
					<div class="variant-glass-primary w-4/5 h-1/2 m-auto p-2">{district.keyphrase}</div>
					<div class="variant-glass-primary w-4/5 h-1/2 m-auto p-2">Rainy Season</div>
					<!-- <div class="variant-glass-primary w-4/5 h-4/5 m-auto">Food</div>
						<div class="variant-glass-primary w-4/5 h-4/5 m-auto">Chill</div> -->
					<!-- </div> -->
				</body>
			</Step>
		{/each}
	</Stepper>
</div>
