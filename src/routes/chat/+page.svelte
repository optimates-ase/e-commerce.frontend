<script lang="ts">
	import Chat from '$comp/Chat/Chat.svelte';
	
  	import type { Conv } from '$lib/types';
	import type {PageData} from './$types'
	
	import { favorites } from '$lib/stores';
	import type { Tour } from '$lib/types.js';
	import { onDestroy } from 'svelte';

	import ChatList from '$comp/Chat/ChatList.svelte';

	import { sender } from '$lib/stores'; 



	export let data;
	const conv:Conv = data.chats[0];

	let who:string;

	const unsubscribe = sender.subscribe((value) => {
		who = value;
	});


	onDestroy(() => {
		sender.set("");
		unsubscribe();
	});
	
</script>

<div class="max-w-md mx-auto p-3">
	<form action="?/addMessage" method="POST">
		{who}
		<Chat conversation={conv} />
	</form>
</div>