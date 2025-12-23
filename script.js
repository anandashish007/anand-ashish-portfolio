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

  const h = new Date().getHours();
  greeting.textContent = h < 12 ? "GOOD MORNING" : h < 17 ? "GOOD AFTERNOON" : "GOOD EVENING";

  setTimeout(() => {
    loader.classList.add("hide");

    // Sequence
    setTimeout(() => profile.classList.add("show"), 400);
    setTimeout(() => caption.classList.add("show"), 900);

    // Seperation Logic
    setTimeout(() => {
      profile.classList.add("move");      // Hero fly to corner
      caption.classList.add("freedom");   // Text stays and snaps up 0.1s
    }, 2400);

    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 3000);
  }, 800);

  aboutBtn.onclick = () => {
    about.classList.add("show");
    bg.classList.add("bg-about"); // Triggers 45% blur
    greeting.style.opacity = "0";
  };

  homeBtn.onclick = () => {
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.style.opacity = "1";
  };
});
