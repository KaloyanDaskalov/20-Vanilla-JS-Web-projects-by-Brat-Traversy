const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//paly & pause video 
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

// update play/pause icon 
function updatePlayerIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    // set timestamp (minutes & seconds)
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    timestamp.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    // console.log(minutes, seconds);
}

// set video time to progress
function setVideoProgress() {
    video.currentTime = (Number(progress.value) * video.duration) / 100;
    // console.log(video.currentTime, video.duration);
}

//stop video 
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// video event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayerIcon);
video.addEventListener('play', updatePlayerIcon);
video.addEventListener('timeupdate', updateProgress);
// play button listener
play.addEventListener('click', toggleVideoStatus);
// stop button listener
stopBtn.addEventListener('click', stopVideo);
// progress bar listener
progress.addEventListener('change', setVideoProgress);

// console.log(video, play, progress, timestamp, stopBtn);
