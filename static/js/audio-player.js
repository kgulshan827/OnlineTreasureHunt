var audioVolumeControl = document.getElementById("audio-vol-control");
var song = document.getElementById("song");
var audioPlayPause = document.getElementById("audio-play-pause");
var backgroundVideo = document.getElementById("background-video");
// var audioSlider = document.querySelector(".audio-slider");
var audioProgress = document.getElementById("audio-progress");

let playing = false;

// Song Play and Pause

audioPlayPause.addEventListener("click", function () {
  if (playing) {
    playing = false;
    song.pause();
    backgroundVideo.pause();
    audioPlayPause.setAttribute("name", "play");
  } else {
    playing = true;
    song.play();
    backgroundVideo.play();
    audioPlayPause.setAttribute("name", "pause");
  }
});

// Audio Volume Controls

audioVolumeControl.addEventListener("change", function () {
  song.volume = this.value / 100;
});

audioVolumeControl.addEventListener("input", function () {
  song.volume = this.value / 100;
});

// Audio Slider Controls

audioProgress.addEventListener("input", function () {
  let newValue = audioProgress.value / audioProgress.max;
  song.currentTime = newValue * song.duration;
  console.log(song.duration);
  console.log(newValue);
  console.log(song.currentTime);
});


// Audio Slider

song.addEventListener("timeupdate", function () {
  var sliderPosition = song.currentTime / song.duration;
  audioProgress.value = sliderPosition * 100;

  if (song.ended) {
    playing = false;
    backgroundVideo.pause();
    audioPlayPause.setAttribute("name", "play");
  }
});
