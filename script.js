// JavaScript (script.js)
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '50%',
        width: '50%',
        videoId: 'VW9c1EtThbM',
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
        // Intenta poner el video en pantalla completa
        const playerElement = document.getElementById('youtube-player');
        if (playerElement.requestFullscreen) {
            playerElement.requestFullscreen();
        } else if (playerElement.mozRequestFullScreen) { // Firefox
            playerElement.mozRequestFullScreen();
        } else if (playerElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            playerElement.webkitRequestFullscreen();
        }
    }
}
