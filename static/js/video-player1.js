var videoVolumeControl = document.getElementById("video-vol-control");
var video = document.getElementById("video");
var videoPlayPause = document.getElementById("video-play-pause");
var videoProgress = document.getElementById("video-progress");

let videoPlaying = false;
// Song Play and Pause


if (video.readyState > 0) {
  console.log("video duration :", video.duration);
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

  videoProgress.addEventListener("input", function () {
    let newValue = videoProgress.value / videoProgress.max; 
    video.currentTime = video.duration * newValue;
    console.log(newValue);
    console.log(video.duration);
    console.log(video.currentTime);
  });

  videoProgress.addEventListener("input", function () {
    video.currentTime = (this.value / 100) * video.duration;
    a = (this.value / 100) * video.duration;
    console.log(this.value);
    console.log("video duration: " ,video.duration);
    console.log("Expected current time: ", a);
    video.currentTime = a;
    console.log("Current Time: ", video.currentTime);
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
}

