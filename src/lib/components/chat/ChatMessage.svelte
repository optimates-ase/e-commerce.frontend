<script lang="ts">
	export let sentBy: string;
	export let nameChatPartner: string;
	export let profilePicChatPartner: string;
	export let nameMe: string;
	export let profilePicMe: string;
	export let message: string;
	export let timestamp: number;

	// This should use timestamp, but its simplified for the demo.
	export let isToday: boolean;

    //class:justify-end={sentByMe} class:justify-end={!sentByMe}
    
    const emailUser: string = "albertomasera@gmail.com";
</script>

<div class="" >
    <div class="mx-2 flex items-end" class:justify-end={sentBy === emailUser} >
        <img
            class="badge-icon w-10 h-10 mb-2"
            src={sentBy == emailUser ? profilePicMe : profilePicChatPartner}
            alt="ProfilePicture"
            class:order-last={sentBy === emailUser} 
        />
    <div class="card m-2 w-full" class:variant-filled-surface={!(sentBy === emailUser)} >
        <div class="m-4" >
            <span class="mr-auto">{message}</span>
        </div>
        <footer class="card-footer">
            <div class="">
                <span class=" flex items-center" class:justify-end={!(sentBy === emailUser)}>
                    
        
                    {#if isToday}
                        <div  class="text-xs" class:order-last={sentBy === emailUser} >
                        {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    {:else}
                        <div class="text-xs" class:order-last={sentBy === emailUser} >
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
                    {#if (sentBy === emailUser)}
                    <div class="text-xs"></div>
                {/if}
                    
                </span>
            </div>
        </footer>
    </div>
</div>
	
	
</div>
