<script lang="ts">
	import CardSmall from '$comp/Cards/CardSmall.svelte';
	import ChatList from '$comp/Chat/ChatList.svelte';
	import UserInfo from '$comp/Forms/UserInfo.svelte';
	export let data;
	console.log(data.signUpTours[0])
</script>

<svelte:head>
	<title>OptiMates - My Page</title>
</svelte:head>

<div class="w-full max-w-md">
	<div class="card p-5 m-5 mb-10">
		<img
			src="https://loremflickr.com/1000/1000/mountain"
			alt="profile_picture"
			class="rounded-xl mb-3"
		/>
		<div class="mb-3">
			<h3>Name</h3>
			<div class="font-mono text-sm text-gray-500">{data.provider.firstName} {data.provider.lastName}</div>
		</div>
		<div class="">
			<h3>Email</h3>
			<div class="font-mono text-sm text-gray-500">{data.provider.email}</div>
		</div>
	</div>
	<div>
		<div>
			<h1 class="m-5 mt-10">Active Chats</h1>
			<div class="card p-5 m-5 mb-10">
				{#if data.signUpTours.length === 0}
					<div class="font-mono text-sm text-gray-500">No active chat at the moment.</div>
				{/if}

				<!-- <ChatList tourList={data.tours} /> -->
			</div>
		</div>
		<h1 class="mx-5 mt-10">Signed up Tours</h1>

		{#if data.signUpTours.length === 0}
			<div class="card p-5 m-5 mb-10">
				<div class="font-mono text-sm text-gray-500">
					No liked Tour at the moment, Explore more!
				</div>
			</div>
		{/if}
		<div class="p-8">
			{#each data.signUpTours as tour}
				<div class="p-2">
					<CardSmall tour={tour.tourData} />
				</div>
			{/each}
		</div>
	</div>
</div>
