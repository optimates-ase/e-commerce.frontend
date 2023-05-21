<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Tour } from '$lib/types';

    import { sender } from '$lib/stores'; 
	import { onDestroy } from 'svelte';

    let  send:string ;

	const unsubscribe = sender.subscribe((value) => {
		send = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	
	export let tourList: Tour []|[];


</script>

<nav class="list-nav">
    <ul>
        {#each tourList as tour (tour._id)}
        <li>
            
            <button on:click={() => {
                sender.set(tour._id);
                goto('/chat');
            }} 


            class="w-full"
            >
                <div class="w-full flex">
                    <div class="w-1/4"> 
                        {#if tour.images = [""]}
                            <div class="">
                            <img src="https://loremflickr.com/1000/1000/belize?random={tour._id}" alt="placeholder" class="badge-icon h-10 w-10">
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