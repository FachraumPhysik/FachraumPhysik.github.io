const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const themeToggle = document.getElementById("theme-toggle");
const container = document.getElementById("container");
const contributorsBox = document.getElementById("contributors");

let isPlaying = false;

// Load theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
});

// Play button toggle
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸️ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶️ Play";
  }
  isPlaying = !isPlaying;
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Click on background to toggle the contributors box
container.addEventListener("click", (e) => {
  if (e.target === container) {
    const isVisible = contributorsBox.style.visibility === "visible";
    contributorsBox.style.visibility = isVisible ? "hidden" : "visible";
    contributorsBox.style.opacity = isVisible ? "0" : "1";
  }
});

