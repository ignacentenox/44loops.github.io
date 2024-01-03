// JavaScript (script.js)
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '50%', // Ajusta la altura según tus preferencias
        width: '50%', // Ajusta el ancho según tus preferencias
        videoId: 'VW9c1EtThbM', // Reemplaza con el ID de tu video de YouTube
        playerVars: {
            'controls': 0,
            'loop': 1,
            'modestbranding': 1,
            'start': 0,
            'mute': 0,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Espera 10 segundos y luego activa el modo de pantalla completa
    setTimeout(() => {
        event.target.playVideo();
        event.target.setVolume(100);
        event.target.unMute(); // Activa el sonido
        event.target.playVideo();
        event.target.webkitEnterFullscreen();
    }, 10000); // 10 segundos en milisegundos
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Cuando el video ha terminado, reinicia la reproducción en bucle
        player.seekTo(0);
        player.playVideo();
    }
}

// Agrega un escucha de eventos para el evento 'fullscreenchange'
document.addEventListener('fullscreenchange', () => {
    // Verifica si el documento está en modo de pantalla completa
    if (!document.fullscreenElement) {
        // Cuando se sale del modo de pantalla completa, establece la opacidad del contenedor de fondo en 0.5
        document.querySelector('.background-container').style.opacity = 0.5;
    }
});
