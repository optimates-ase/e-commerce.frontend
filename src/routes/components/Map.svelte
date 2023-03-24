<script>
    import { onMount, onDestroy } from 'svelte'
    import { Map, NavigationControl, Marker } from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
  
    let map;
    let mapContainer;
  
    onMount(() => {
  
      const apiKey = 'R7SWIU6LxTG0LcVb5eyr';
  
      const initialState = { lng:  -88.3596575, lat:17.5 , zoom: 9 };
  
      map = new Map({
        container: mapContainer,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      });
      map.addControl(new NavigationControl(), 'top-right');
      new Marker({color: "#FF0000"})
        .setLngLat([-88.2,17.5])
        .addTo(map);
    });
  
    onDestroy(() => {
      map.remove();
    });
  </script>
  
  <div class="flex justify-center m-10">
    <div class="map shadow-2xl rounded-2xl " id="map" bind:this={mapContainer}></div>
  </div>
  


  <style>
  
    .map-wrap {
      position: relative;
      width: 100%;
      height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
    }
  
    .map {
      position: absolute;
      width: 60%;
      height: 50%;
    }
  
    .watermark {
      position: absolute;
      left: 100px;
      bottom: 10px;
      z-index: 999;
    }


    
    
  </style>