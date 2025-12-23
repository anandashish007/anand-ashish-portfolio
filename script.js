document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");
  const caption = document.getElementById("caption");
  const intro = document.getElementById("intro");
  const taskbar = document.getElementById("taskbar");
  const about = document.getElementById("about");
  const bg = document.querySelector(".background");
  const greeting = document.getElementById("greeting");

  // ---- Greeting (Indian Time) ----
  const hour = new Date().getHours();
  let greetText = "Good Evening";

  if (hour >= 5 && hour < 12) greetText = "Good Morning";
  else if (hour >= 12 && hour < 17) greetText = "Good Afternoon";

  greeting.textContent = greetText;

  // ---- Initial background state ----
  bg.classList.add("bg-intro");

  // 1️⃣ Profile appears (slightly top-center)
  setTimeout(() => {
    profile.classList.add("show");
  }, 300);

  // 2️⃣ Caption (0.1s delay)
  setTimeout(() => {
    caption.classList.add("show");
  }, 400);

  // 3️⃣ Profile hero move to top-left
  setTimeout(() => {
    profile.classList.add("move");
    caption.classList.add("hide");
  }, 2300);

  // 4️⃣ Background clears + greeting appears
  setTimeout(() => {
    bg.classList.remove("bg-intro");
    bg.classList.add("bg-clear");
    greeting.classList.add("show");
  }, 2600);

  // 5️⃣ Intro gone, taskbar slides down
  setTimeout(() => {
    intro.classList.add("hide");
    taskbar.classList.add("show");
  }, 3000);

  // ---- ABOUT ME toggle ----
  document.getElementById("aboutBtn").addEventListener("click", () => {
    about.style.display = "block";
    bg.classList.remove("bg-clear");
    bg.classList.add("bg-about");
  });
});
