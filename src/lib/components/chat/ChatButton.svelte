<script lang="ts">

    import SubChat from '$comp/chat/ChatSubComponent.svelte';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    const chat: ModalSettings = {
        type: 'alert',
        title: 'Chat',
        body: '',
    };
    
    const handleClick = () => {
        // Create a temporary container element
        const container = document.createElement('div');

        // Render the SubChat component into the container
        new SubChat({
            target: container,
        });

        // Set the innerHTML of the container as the body of the modal
        chat.body = container.innerHTML;

        // Trigger the modal with the updated chat settings
        modalStore.trigger(chat);
    }

</script>

<div>
    <button class="btn variant-filled-primary text-xl mt-12" on:click={handleClick}>
        Chat
    </button>
    
</div>