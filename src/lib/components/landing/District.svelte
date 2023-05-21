<script lang="ts">
	import { goto } from '$app/navigation';
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

	const handleStep = () => {
		radioSet?.set(-1);
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
		// TODO fix overflow
		const alert: ModalSettings = {
			type: 'alert',
			title: highlight?.name,
			image: highlight?.thumbnail,
			body: highlight?.keyExpression.join('\n\n'),
		};

		modalStore.trigger(alert);
	};
</script>

<div class="mt-4 mb-8 p-6">
	<div class="mb-8 w-full p-2">
		<h1>Districts</h1>
	</div>

	<Stepper
		on:next={handleStep}
		on:back={handleStep}
		on:complete={() => goto('/explore')}
		buttonCompleteLabel="explore tours ↪"
		buttonNextLabel="next district →"
		buttonBackLabel="← prev district"
	>
		{#each districts as district}
			<Step>
				<svelte:fragment slot="header">
					<div class="mx-4 my-3">
						{district.name}
					</div>
				</svelte:fragment>
				<div class="h-4/5 grid grid-cols-7">
					<div class=" col-span-7 h-72 w-full p-2 overflow-auto">
						<div class="p-4">
							{district.keyphrase}
						</div>
					</div>
					<div class="col-span-4 h-60 w-full p-3">
						<img
							class="h-full mx-auto rounded-xl"
							src={district.map}
							alt={'Map of Belize with ' + district.name + 'highlighted.'}
						/>
					</div>
					<div class="col-span-3 items-center h-full py-6">
						<RadioGroup display="flex-col">
							{#each district.highlights as highlight}
								<RadioItem
									bind:group={$radioSet}
									name={district.id + '_' + String(highlight.id)}
									value={highlight.id}
									on:click={handleClick}
								><div class="h-12">
									<p class="text-left">
										{highlight.name}
									</p>

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
