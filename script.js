document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile"),
        caption = document.getElementById("caption"), // This is the .welcome text
        loader = document.getElementById("loader"),
        taskbar = document.getElementById("taskbar"),
        greeting = document.getElementById("greeting"),
        bg = document.querySelector(".background"),
        about = document.getElementById("about"),
        aboutBtn = document.getElementById("aboutBtn"),
        homeBtn = document.getElementById("homeBtn");

  // Initial Sequence (Summarized)
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

  // Updated About Toggle
  aboutBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.add("show");
    bg.classList.add("bg-about");
    greeting.classList.add("blur"); // Blurs greeting
    caption.classList.add("blur");  // Blurs Welcome to My Portfolio
  };

  homeBtn.onclick = (e) => {
    e.preventDefault();
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.classList.remove("blur");
    caption.classList.remove("blur");
  };
});
