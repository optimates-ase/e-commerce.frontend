<script>
    import Map from '../components/Map.svelte';
    import Navbar from '../components/Navbar.svelte';
    import Selection from '../components/Selection.svelte';
    import ChooseUs from '../components/ChooseUs.svelte';
    import CardsComponent from '../components/CardsComponent.svelte';
    import { AppShell } from '@skeletonlabs/skeleton';
</script>


<div class="app">
    <AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
        <svelte:fragment slot="pageHeader">
            <Navbar />
        </svelte:fragment>
        <!-- Router Slot -->
        <div class="app">
              
            <CardsComponent title="Favourite" subtitle="Section with locations saved by you "/>
            <Map />
            <CardsComponent title="Past" subtitle="Your past adventures"/>
            
            
        </div>
    </AppShell>
    
  </div>
  
<style>
    .app {
      text-align: center;
    }
    :global(body){
        background-image: url("src/images/BGLine.svg");
    }
</style>