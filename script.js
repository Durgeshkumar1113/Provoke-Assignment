const apiKey = 'https://www.googleapis.com/youtube/v3';

const videoId = 'VnM_XyCxHW8';

// Load YouTube API asynchronously
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can add custom logic based on video state changes
}

// Load YouTube API script
const scriptTag = document.createElement('script');
scriptTag.src = `https://www.googleapis.com/js/api.js?key=${apiKey}&callback=onYouTubeIframeAPIReady`;
document.head.appendChild(scriptTag);
