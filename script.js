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

    // Start of flow: Profile begins showing
    setTimeout(() => profile.classList.add("show"), 300);

    // Text begins showing shortly after profile starts
    setTimeout(() => caption.classList.add("show"), 700);

    // Separation happens exactly as text finishes its 0.5s fade (700+500=1200)
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("freedom");
    }, 1800); 

    // Background and Nav appear as profile is mid-flight
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 2300);
  }, 600);

  aboutBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.add("show");
    bg.classList.add("bg-about");
    greeting.style.opacity = "0";
  };

  homeBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.style.opacity = "1";
  };
});

