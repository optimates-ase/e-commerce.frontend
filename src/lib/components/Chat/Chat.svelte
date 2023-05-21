<script lang="ts">
    

	import { onMount } from 'svelte/internal';
	// import ChatMessage from '../chat/ChatMessage.svelte';
    import type { Conv, Message } from '$lib/types';
	import ChatMessage from '$comp/Chat/ChatMessage.svelte';


    export let conversation: Conv;

	let nameMe=conversation.user;
	let profilePicMe='https://p0.pikist.com/photos/474/706/boy-portrait-outdoors-facial-men-s-young-t-shirt-hair-person-thumbnail.jpg';

	let nameChatPartner=conversation.provider;
	let profilePicChatPartner='https://static1.squarespace.com/static/5623c261e4b08da1710cedf0/t/60f4bf529c7c9f0ea9aab322/1626652501779/2016-KLUG-Belize-51.jpeg?format=1500w';
	
    const today = new Date().setHours(0, 0, 0, 0); 
    const todayMessages = conversation.messages.filter((element) => element.timestamp >= today);
    const messages = conversation.messages.filter((element) => element.timestamp < today);
	

let currentMessage = '';

function addMessage(): void {
    if(currentMessage != ''){
        const currentDate = new Date(); 
        const timestamp = currentDate.getTime()
        
        // Smoothly scroll to the bottom of the feed
        setTimeout(() => { scrollChatBottom('smooth'); }, 0);
    }
    
}

function onPromptKeydown(event: KeyboardEvent): void {
		if (['Enter'].includes(event.code)) {
            
            event.preventDefault();
            addMessage();
            
		}
	}
    let elemChat: HTMLElement;

    function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}

    onMount(() => {
		scrollChatBottom();
	});

</script>





<div class="card max-w-md max-h-screen ">

    <header class="card-header border-b border-gray-500">
        <div class="flex items-center m-4  ">
            <img class="w-14 h-14 rounded-full" src={profilePicChatPartner} alt="profilePic">
            <h2 class="contacts-name m-3">{nameChatPartner}</h2>
        </div>
    </header>
    <div class="card-body ">
        <section bind:this={elemChat} class="max-h-[450px] p-4 overflow-y-auto scrollbar-hide" >
            {#each messages as message}
                <div class="m-2 mt-4">
                <ChatMessage
                    nameMe = {nameMe}
                    profilePicMe = {profilePicMe}
                    nameChatPartner = {nameChatPartner}
                    profilePicChatPartner = {profilePicChatPartner}
										message={message.content}
									    timestamp={message.timestamp}
										sentBy={message.sender} 
                                        isToday={false} 
										/>
                </div>
            {/each}
            <div class="m-2 mt-4">
                <div class="flex justify-center ">
                    <div class="card variant-filled-primary p-2 px-4 text-xs m-2">Today</div>
                </div>
					
					 {#each todayMessages as todayMessage}
                <ChatMessage
                    nameMe = {nameMe}
                    profilePicMe = {profilePicMe}
                    nameChatPartner = {nameChatPartner}
                    profilePicChatPartner = {profilePicChatPartner}
										message={todayMessage.content}
									    timestamp={todayMessage.timestamp}
                                        sentBy={todayMessage.sender} 										
										isToday={true} 														 
										/>
            {/each}
            </div>
        </section>
    </div>
    <footer class="card-footer border-t border-gray-500 p-3">
        <div class="input-group grid-cols-8">
                <input type="text" 
                bind:value={currentMessage}
                class="col-span-6 bg-transparent border-0 ring-0 overflow-y-auto scrollbar-hide"  
                placeholder="Write a message..." 
                on:keydown={onPromptKeydown}
                id={'content'}
		        name={'content'}
                />
            <button  class={currentMessage ? 'variant-filled-primary col-span-2' : 'input-group-shim col-span-2'} on:click={addMessage}>Send </button>
        
        </div>
        
    </footer>
</div>

<style>
    /* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>