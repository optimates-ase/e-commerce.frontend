<script>
    import Map from '../components/Map.svelte';
    import Navbar from '../components/Navbar.svelte';
    import { AppShell } from '@skeletonlabs/skeleton';
    import CardsComponent from '../components/CardsComponent.svelte';
</script>


<div class="app">
    <AppShell>
        <svelte:fragment slot="header">
            <Navbar />
        </svelte:fragment>
        <!-- Router Slot -->
        <div class="app">
            <Map />
            <CardsComponent />
            <CardsComponent />
            
        </div>
        <!-- ---- / ---- -->
        <svelte:fragment slot="footer">Page Footer</svelte:fragment>
    </AppShell>
    
  </div>
  
<style>
    .app {
      text-align: center;
    }
</style>