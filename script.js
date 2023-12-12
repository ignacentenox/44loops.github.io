const video = document.querySelector('video');
const backgroundImage = document.querySelector('.background-image');

video.addEventListener('play', () => {
    backgroundImage.style.opacity = 0;
});

video.addEventListener('pause', () => {
    backgroundImage.style.opacity = 0.5;
});
