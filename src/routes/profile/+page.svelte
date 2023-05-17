<script lang="ts">
	import { goto } from '$app/navigation';
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	import ChatList from '$comp/Chat/ChatList.svelte';
	import Carousel from '$comp/UIUX/Carousel.svelte';
	
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';

	export let data;

	let tourList: Tour[] = [];

	const unsubscribe = favorites.subscribe((value) => {
		tourList = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>OptiMates - My Page</title>
</svelte:head>

<div class="w-full max-w-md mx-auto">
	<div class="card p-5 m-5 mb-10">
		<img
			src="https://loremflickr.com/1000/1000/mountain"
			alt="profile_picture"
			class="rounded-xl mb-3"
		/>
		<div class="mb-3">
			<h3>Name</h3>
			<div class="font-mono text-sm text-gray-500">{data.user.firstName} {data.user.lastName}</div>
		</div>
		<div class="">
			<h3>Email</h3>
			<div class="font-mono text-sm text-gray-500">{data.user.email}</div>
		</div>
	</div>
	<div>
		<div>
			<h1 class="m-5 mt-10">Active Chats</h1>
			<div class="card p-5 m-5 mb-10">
				{#if tourList.length === 0}
					<div class="font-mono text-sm text-gray-500">No active chat at the moment.</div>
				{/if}

				<ChatList {tourList} />
			</div>
		</div>
		<h1 class="mx-5 mt-10">Liked Tours</h1>

		{#if tourList.length === 0}
			<div class="card p-5 m-5 mb-10">
				<div class="font-mono text-sm text-gray-500">
					No liked Tour at the moment, Explore more!
				</div>
			</div>
		{/if}
		<div class="p-8">
			{#each tourList as tour (tour._id)}
				<div class="p-2">
					<CardSmall {tour} />
				</div>
			{/each}
		</div>
	</div>
</div>
