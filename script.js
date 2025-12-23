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
  const intro    = document.getElementById("intro");

  /* GREETING LOGIC */
  const h = new Date().getHours();
  greeting.textContent =
    h < 12 ? "GOOD MORNING" :
    h < 17 ? "GOOD AFTERNOON" :
    "GOOD EVENING";

  // Animation Sequence
  setTimeout(() => {
    // Hide Loader
    loader.classList.add("hide");

    // 1. Show Profile
    setTimeout(() => profile.classList.add("show"), 300);

    // 2. Show Caption (Name)
    setTimeout(() => caption.classList.add("show"), 800);

    // 3. Move to Corner & Hide Caption
    setTimeout(() => {
      caption.classList.remove("show");
      caption.classList.add("hide");
      
      intro.classList.add("moveIntro");
      profile.classList.add("move");
    }, 2200);

    // 4. Reveal Background and Taskbar
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
      taskbar.classList.add("show");
    }, 2800);

  }, 800);

  /* INTERACTION LOGIC */
  let opened = false;

  aboutBtn.onclick = (e) => {
    e.preventDefault();
    opened = !opened;
    about.classList.toggle("show", opened);
    bg.classList.toggle("bg-about", opened);
    greeting.classList.toggle("blur", opened);
  };

  homeBtn.onclick = (e) => {
    e.preventDefault();
    opened = false;
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.classList.remove("blur");
  };
});

