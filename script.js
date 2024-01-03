function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '50%',
        width: '50%',
        videoId: 'VW9c1EtThbM',
        playerVars: {
            'autoplay': 0, // No reproduce automáticamente al cargar
            'controls': 0,
            'loop': 1,
            'modestbranding': 1,
            'mute': 1, // Silencia el video al iniciar automáticamente
            'iv_load_policy': 3
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    // Añade un evento de clic al documento para iniciar la reproducción y pantalla completa
    document.addEventListener('click', function () {
        player.playVideo();
        player.unMute(); // Activa el sonido
        player.setLoop(true); // Establece el bucle
        player.webkitEnterFullscreen();
    });
}

// ...
