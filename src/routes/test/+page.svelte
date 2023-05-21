<script>
    import { onMount } from 'svelte';
    import { io } from 'socket.io-client';
  
    let socket;
  
    onMount(() => {
      socket = io();
  
      socket.on('message', (response) => {
        // Gestisci la risposta ricevuta dal server
        console.log('Received response:', response);
      });
    });
  
    function sendMessage() {
      const message = 'Hello, World!';
  
      socket.emit('message', message);
    }
  </script>
  

    <!-- Contenuto dell'applicazione -->
  
    <button on:click={sendMessage}>Invia Messaggio</button>
