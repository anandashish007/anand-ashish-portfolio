document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile"),
        caption = document.getElementById("caption"),
        loader = document.getElementById("loader"),
        taskbar = document.getElementById("taskbar"),
        greeting = document.getElementById("greeting"),
        bg = document.querySelector(".background"),
        about = document.getElementById("about"),
        aboutBtn = document.getElementById("aboutBtn"),
        homeBtn = document.getElementById("homeBtn");

  // Greeting logic
  const h = new Date().getHours();
  greeting.textContent = h < 12 ? "GOOD MORNING" : h < 17 ? "GOOD AFTERNOON" : "GOOD EVENING";

  // Startup sequence
  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(() => profile.classList.add("show"), 400);
    setTimeout(() => caption.classList.add("show"), 900);
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("freedom");
    }, 2400);
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 3000);
  }, 800);

  // About Toggle with deep blur
  aboutBtn.onclick = () => {
    about.classList.add("show");
    bg.classList.add("bg-about");
    greeting.style.opacity = "0"; // Hide greeting to focus on About
  };

  homeBtn.onclick = () => {
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.style.opacity = "1";
  };
});
