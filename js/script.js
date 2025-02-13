const audio = document.getElementById("audio");
const progressBar = document.querySelector(".progress");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸"; // ganti tombol jadi pause
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + "%";
});
