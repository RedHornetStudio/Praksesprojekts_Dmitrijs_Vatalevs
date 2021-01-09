const videoContainer = document.querySelector('.sparkle-video .video-container');
const video = document.querySelector('.sparkle-video video');
const playButton = document.querySelector('.sparkle-video .play-button');
const poster = document.querySelector('.sparkle-video img');
let isVideoPlaying = false;

video.addEventListener('pause', e => {
  playButton.classList.remove('hide');
  poster.classList.remove('hide');
  isVideoPlaying = false;
});

video.addEventListener('play', e => {
  playButton.classList.add('hide');
  poster.classList.add('hide');
  isVideoPlaying = true;
});

const toggleVideo = () => {
  if(!isVideoPlaying) {
    video.play();
  } else {
    video.pause();
  }
};

playButton.addEventListener('click', e => {
  e.stopPropagation();
  toggleVideo();
});

videoContainer.addEventListener('click', e => {
  toggleVideo();
});

videoContainer.addEventListener('keydown', e => {
  if(e.key === ' ') {
    e.preventDefault();
  }
});

videoContainer.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    toggleVideo();
  }
});