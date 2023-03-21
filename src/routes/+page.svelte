<script lang="ts">
	import { AppBar, Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let valueSingle: string = 'books';
</script>

<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
	<svelte:fragment slot="headline">Welcome to SvelteKit</svelte:fragment>
</AppBar>
<p>
	Welcome Optimates, this is our frontend. You'll find the documentation and usefull links, of all
	technologies. below in some Skeleton components
</p>

<div class="border border-b border-black" />

<div>
	<a href="/about">Click me to go to About section</a>
</div>

<div class="flex justify-center w-full">
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead">
				<img src="/svelte.png" alt="" class="aspect-square h-8" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Sveltekit</svelte:fragment>
			<svelte:fragment slot="content">
				<ListBox>
					<ListBoxItem bind:group={valueSingle} name="medium" value="skdoc">
						<a href="https://kit.svelte.dev/docs/introduction" target="_blank"
							>Sveltekit Documentation</a
						>
					</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="sdoc">
						<a href="https://svelte.dev/docs" target="_blank">Svelte Documentation</a>
					</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="stut">
						<a href="https://svelte.dev/tutorial/basics" target="_blank">Svelte Tutorial</a>
					</ListBoxItem>
				</ListBox>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<img src="/tailwindcss.png" alt="" class="aspect-square h-8" />
			</svelte:fragment>
			<svelte:fragment slot="summary">TailwindCSS</svelte:fragment>
			<svelte:fragment slot="content">
				<ListBox>
					<ListBoxItem bind:group={valueSingle} name="medium" value="tdoc">
						<a href="https://tailwindcss.com/docs/guides/sveltekit" target="_blank">Documentation</a
						>
					</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="tcs">
						<a href="https://nerdcave.com/tailwind-cheat-sheet" target="_blank">Cheat Sheet</a>
					</ListBoxItem>
				</ListBox>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<img src="/skeleton.png" alt="" class="aspect-square h-8" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Skeleton UI</svelte:fragment>
			<svelte:fragment slot="content">
				<ListBox>
					<ListBoxItem bind:group={valueSingle} name="medium" value="sdoc">
						<a href="https://www.skeleton.dev/docs/introduction" target="_blank">Documentation</a>
					</ListBoxItem>
				</ListBox>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
