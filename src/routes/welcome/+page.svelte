<!-- 1. load interactive app 
    - 6 zones
    - zona norte
    - zona oeste
    - zone sur
    - costa sureste
    - costa central
    - islands
 -->
 <script lang="ts">
    import "aframe"
    import "aframe-svelte"   
</script>

<main>
    <a-scene>
        <a-sky src="/src/public/secret_beach.jpg" rotation="0 -65 0"></a-sky>
        <a-text font="kelsonsans" value="Welcome to\nSecret Beach, Belize" width="6" position="-1 3.5 -3.25"
        rotation="0 15 0"></a-text>
    </a-scene>
</main>