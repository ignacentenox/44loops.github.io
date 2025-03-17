// JavaScript (script.js)
var player;

function onYouTubeIframeAPIReady() {
    try {
        player = new YT.Player('youtube-player', {
            height: '100%',
            width: '100%',
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'loop': 1,
                'modestbranding': 1,
                'mute': 1,
                'iv_load_policy': 3,
                'listType': 'playlist',
                'list': 'PLUYzBUz0Pt6e_A94BFsCqn3PAu3-sRH2O' // ID de la playlist
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    } catch (error) {
        console.error('Error al inicializar el reproductor de YouTube:', error);
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
    }

    if (event.data === YT.PlayerState.PLAYING) {
        player.unMute();

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
