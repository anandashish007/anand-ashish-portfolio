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

    // Sequence Start
    setTimeout(() => profile.classList.add("show"), 400);
    
    // Caption appears after profile is solid
    setTimeout(() => caption.classList.add("show"), 800);

    // Hero Move & Caption Snap (Slower and stutter-free)
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("freedom");
    }, 2200); 

    // Final Background and Taskbar
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 3000);
  }, 800);

  // Interaction logic
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
