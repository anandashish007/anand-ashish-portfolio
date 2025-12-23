document.addEventListener("DOMContentLoaded", () => {
  const profile  = document.getElementById("profile");
  const caption  = document.getElementById("caption");
  const loader   = document.getElementById("loader");
  const taskbar  = document.getElementById("taskbar");
  const greeting = document.getElementById("greeting");
  const bg       = document.querySelector(".background");
  const about    = document.getElementById("about");
  const aboutBtn = document.getElementById("aboutBtn");
  const homeBtn  = document.getElementById("homeBtn");

  /* GREETING LOGIC */
  const h = new Date().getHours();
  greeting.textContent =
    h < 12 ? "GOOD MORNING" :
    h < 17 ? "GOOD AFTERNOON" :
    "GOOD EVENING";

  /* INITIAL ANIMATION SEQUENCE */
  setTimeout(() => {
    // Hide Loader
    loader.classList.add("hide");

    // 1) Profile fade-in
    setTimeout(() => profile.classList.add("show"), 400);

    // 2) Caption zoom-in under picture
    setTimeout(() => caption.classList.add("show"), 900);

    // 3) Separation: Picture flies to corner, Text snaps up 0.1s
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("freedom");
    }, 2400);

    // 4) Background clear, Greeting, and Taskbar
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 3000);

  }, 800);

  /* ABOUT OPEN/CLOSE LOGIC */
  aboutBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.add("show");
    bg.classList.add("bg-about"); // Triggers 45% blur
    greeting.style.opacity = "0";
  };

  homeBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.style.opacity = "1";
  };
});

