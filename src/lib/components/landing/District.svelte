<script lang="ts">
	import type { Country, District, Highlight } from '$lib/types';
	import {
		RadioGroup,
		RadioItem,
		Step,
		Stepper,
		type ModalSettings,
		modalStore
	} from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	export let districts: District[];

	let radioSet: Writable<number> | null = writable();
	const icon: Writable<string> = writable();
	const keyExpr: Writable<string[] | undefined> = writable();

	const handleNext = (e) => {
		radioSet = writable();
	};

	const handleClick = (e) => {
		const district = districts.find((dis: District) => {
			return e.target.name.startsWith(dis.id);
		});
		const highlight = district?.highlights.find((hl: Highlight) => {
			return e.target.name.endsWith(hl.id);
		});

		icon.set(String(highlight?.icon));
		keyExpr.set(highlight?.keyExpression);
		// TODO fix landscape mode not all of modal is visible
		const alert: ModalSettings = {
			type: 'alert',
			title: highlight?.name,
			image: highlight?.thumbnail,
			body: highlight?.keyExpression.join('\n\n')
		};

		modalStore.trigger(alert);
	};
</script>

<div class="mt-4 mb-8 p-6">
	<div class="mb-8 w-full p-2">
		<h1>Districts</h1>
	</div>

	<Stepper>
		{#each districts as district}
			<Step on:next={handleNext}>
				<svelte:fragment slot="header">
					<div class="mx-4 my-3">
					{district.name}
					</div>
				</svelte:fragment>
				<div class="h-4/5 card grid grid-cols-7 ">
					<div class=" col-span-7 h-70 w-full p-2">
						<div class="p-4">
							{district.keyphrase}
						</div>
					</div>
					<div class="col-span-4 h-60 w-full p-3 ">
						<img
							class="h-full mx-auto rounded-xl"
							src={district.map}
							alt={'Map of Belize with ' + district.name + 'highlighted.'}
						/>
					</div>
					<div class=" col-span-3 flex items-center h-60 w-full pr-3">
						<!-- TODO probably switch to buttons since, I don't know how to unselect the radiobuttons when changing the step -->
						<RadioGroup display="flex-col" rounded="rounded-container-token">
							{#each district.highlights as highlight}
								<RadioItem
									bind:group={$radioSet}
									name={district.id + '_' + String(highlight.id)}
									value={highlight.id}
									on:click={handleClick}
								>
									<div class="h-18">
										{highlight.name}
									</div>
								</RadioItem>
							{/each}
						</RadioGroup>
					</div>
				</div>
			</Step>
		{/each}
	</Stepper>
</div>
