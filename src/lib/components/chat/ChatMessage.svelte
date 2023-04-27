<script lang="ts">
	export let sentByMe: boolean;
	export let nameChatPartner: string;
	export let profilePicChatPartner: string;
	export let nameMe: string;
	export let profilePicMe: string;
	export let message: string;
	export let timestamp: number;
	export let timeRead: number;

	// This should use timestamp, but its simplified for the demo.
	export let isToday: boolean;

    //class:justify-end={sentByMe} class:justify-end={!sentByMe}
    

</script>

<div class="" >
    <div class="mx-2 flex items-end" class:justify-end={sentByMe} >
        <img
            class="w-10 h-10 rounded-full mb-2"
            src={sentByMe == true ? profilePicMe : profilePicChatPartner}
            alt="ProfilePicture"
            class:order-last={sentByMe} 
        />
    <div class="card m-2 w-full" class:variant-filled-surface={!sentByMe} >
        <div class="m-4" >
            <span class="mr-auto">{message}</span>
        </div>
        <footer class="card-footer">
            <div class="">
                <span class=" flex items-center" class:justify-end={!sentByMe}>
                    
        
                    {#if isToday}
                        <div  class="text-xs" class:order-last={sentByMe} >
                        {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    {:else}
                        <div class="text-xs" class:order-last={sentByMe} >
                        {new Date(timestamp).toLocaleString([], {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        })}
                        </div>
                    {/if}
                    {#if sentByMe === true}
                    <div class="text-xs">Icon</div>
                {/if}
                    
                </span>
            </div>
        </footer>
    </div>
</div>
	
	
</div>
