<script lang="ts">
	import { goto } from '$app/navigation';



	
	export let tourList: Tour []|[];



</script>

<nav class="list-nav">
    <ul>
        {#each tourList as tour (tour.id)}
        <li>
            
            <button on:click={() => {
                goto('/chat');
            }} 
            class="w-full"
            >
                <div class="w-full flex">
                    <div class="w-1/4"> 
                        {#if tour.images = [""]}
                            <div class="">
                            <img src="https://loremflickr.com/1000/1000/belize,tour" alt="placeholder" class="badge-icon h-10 w-10">
                            </div>
                        {:else}
                            <img src = tour.images[0] alt="profile_picture" class="badge">
                        {/if}
                    </div>
                    <div class="w-3/4 ">
                        <dt class="flex justify-items-start">{tour.name}</dt>
                        <dd class="flex justify-items-start">{tour.description}</dd>
                    </div>
                </div>
            </button>
        </li>
        {/each }
    </ul>
</nav>