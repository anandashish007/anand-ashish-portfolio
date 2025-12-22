document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");
  const welcome = document.getElementById("welcome");
  const intro = document.getElementById("intro");
  const taskbar = document.getElementById("taskbar");
  const about = document.getElementById("about");

  // 1. Profile appears
  setTimeout(() => {
    profile.classList.add("show");
  }, 400);

  // 2. Welcome appears
  setTimeout(() => {
    welcome.classList.add("show");
  }, 900);

  // 3. Profile moves AFTER welcome finishes
  setTimeout(() => {
    profile.classList.add("move");
  }, 1700);

  // 4. Welcome hides
  setTimeout(() => {
    welcome.classList.add("hide");
  }, 1850);

  // 5. Intro exits
  setTimeout(() => {
    intro.classList.add("hide");
  }, 2350);

  // 6. Taskbar shows
  setTimeout(() => {
    taskbar.classList.add("show");
  }, 2550);

  // 7. About section shows
  setTimeout(() => {
    about.style.display = "block";
  }, 2900);
});
