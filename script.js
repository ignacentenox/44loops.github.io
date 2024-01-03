// JavaScript (script.js)
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'VW9c1EtThbM', // Reemplaza con el ID de tu video de YouTube
        playerVars: {
            'autoplay': 1,  // Reproducir automáticamente al cargar
            'controls': 0,
            'loop': 1,
            'modestbranding': 1,
            'start': 0,
            'mute': 0,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(100);
    event.target.setLoop(true);
    event.target.unMute(); // Activa el sonido
    event.target.playVideo();
    event.target.webkitEnterFullscreen();
}

// Agrega un escucha de eventos para el evento 'fullscreenchange'
document.addEventListener('fullscreenchange', () => {
    // Verifica si el documento está en modo de pantalla completa
    if (!document.fullscreenElement) {
        // Cuando se sale del modo de pantalla completa, establece la opacidad del contenedor de fondo en 0.5
        document.querySelector('.background-container').style.opacity = 0.5;
    }
});
