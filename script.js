// JavaScript (script.js)
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'PLUYzBUz0Pt6e_A94BFsCqn3PAu3-sRH2O',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'modestbranding': 1,
            'mute': 1,
            'iv_load_policy': 3
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Cuando el video ha terminado, reinicia la reproducción en bucle
        player.seekTo(0);
        player.playVideo();
    }

    if (event.data === YT.PlayerState.PLAYING) {
        // Después de iniciar la reproducción, activa el sonido
        player.unMute();

        // Intenta poner el video en pantalla completa
        const playerElement = document.getElementById('youtube-player');
        if (playerElement.requestFullscreen) {
            playerElement.requestFullscreen();
        } else if (playerElement.mozRequestFullScreen) { // Firefox
            playerElement.mozRequestFullScreen();
        } else if (playerElement.webkitRequestFullscreen) { // Chrome, Safari y Opera
            playerElement.webkitRequestFullscreen();
        }
    }
}
