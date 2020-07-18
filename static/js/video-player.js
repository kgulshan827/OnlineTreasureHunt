var videoVolumeControl = document.getElementById("video-vol-control");
var video = document.getElementById("video");
var videoPlayPause = document.getElementById("video-play-pause");
var videoProgress = document.getElementById("video-progress");

let videoPlaying = false;
videoProgress.setAttribute("value", "0");
// Song Play and Pause

videoPlayPause.addEventListener("click", function () {
  if (videoPlaying) {
    videoPlaying = false;
    video.pause();
    videoPlayPause.setAttribute("name", "play");
  } else {
    videoPlaying = true;
    video.play();
    videoPlayPause.setAttribute("name", "pause");
  }
});

// Video Volume Controls

videoVolumeControl.addEventListener("change", function () {
  video.volume = this.value / 100;
});

videoVolumeControl.addEventListener("input", function () {
  video.volume = this.value / 100;
});

// Video Slider Controls

videoProgress.addEventListener("change", function () {
  video.currentTime = (this.value / 100) * video.duration;
});

videoProgress.addEventListener("input", function () {
  video.currentTime = (this.value / 100) * video.duration;
});

// Video Slider

video.addEventListener("timeupdate", function () {
  var sliderPosition = video.currentTime / video.duration;
  videoProgress.value = sliderPosition * 100;

  if (video.ended) {
    videoPlaying = false;
    videoPlayPause.setAttribute("name", "play");
  }
});
