const playerItems = document.querySelectorAll(".player");

playerItems.forEach((playerItem) => {
  const audioPlayer = playerItem.querySelector("audio");
  const startButton = playerItem.querySelector(".player__start");
  const stopButton = playerItem.querySelector(".player__stop");
  const songDurationSlider = playerItem.querySelector(".player__song-duration");
  const songVolumeSlider = playerItem.querySelector(".player__song-volume");
  const songName = playerItem.querySelector(".player__name");
  const songTime = playerItem.querySelector(".player__time");

  audioPlayer.addEventListener("timeupdate", () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    songTime.textContent = `${
      currentMinutes < 10 ? "0" : ""
    }${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds} / ${
      totalMinutes < 10 ? "0" : ""
    }${totalMinutes}:${totalSeconds < 10 ? "0" : ""}${totalSeconds}`;
    const percent = (currentTime / duration) * 100;
    songDurationSlider.value = percent;
  });

  startButton.addEventListener("click", () => {
    audioPlayer.play();
  });

  stopButton.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  });

  audioPlayer.addEventListener("loadedmetadata", () => {
    const currentTime = (audioPlayer.duration * songDurationSlider.value) / 100;
    audioPlayer.currentTime = currentTime;
  });

  songDurationSlider.addEventListener("input", () => {
    const currentTime = (audioPlayer.duration * songDurationSlider.value) / 100;
    audioPlayer.currentTime = currentTime;
  });

  songVolumeSlider.addEventListener("input", () => {
    audioPlayer.volume = songVolumeSlider.value / 100;
  });
});
