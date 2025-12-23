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

  // Greeting logic
  const h = new Date().getHours();
  greeting.textContent = h < 12 ? "GOOD MORNING" : h < 17 ? "GOOD AFTERNOON" : "GOOD EVENING";

  // Main Animation Sequence
  setTimeout(() => {
    loader.classList.add("hide");

    setTimeout(() => profile.classList.add("show"), 400);
    setTimeout(() => caption.classList.add("show"), 900);

    // Profile flies to corner, text snaps up in 0.1s
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("freedom");
    }, 2400);

    // Show final UI
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 3000);
  }, 800);

  // About Toggle
  let opened = false;
  aboutBtn.onclick = (e) => {
    e.preventDefault();
    opened = !opened;
    about.classList.toggle("show", opened);
    bg.classList.toggle("bg-about", opened);
  };
  
  homeBtn.onclick = (e) => {
    e.preventDefault();
    opened = false;
    about.classList.remove("show");
    bg.classList.remove("bg-about");
  };
});

