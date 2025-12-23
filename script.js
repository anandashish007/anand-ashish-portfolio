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

  /* GREETING */
  const h = new Date().getHours();
  greeting.textContent =
    h < 12 ? "GOOD MORNING" :
    h < 17 ? "GOOD AFTERNOON" :
    "GOOD EVENING";

  const profileInMs = 900;  // same as CSS for .profile

  setTimeout(() => {

    loader.classList.add("hide");

    // 1) profile fade-in (cubic-bezier intro)
    setTimeout(() => profile.classList.add("show"), 200);

    // 2) caption zoom-in under picture
    setTimeout(() => caption.classList.add("show"), 200 + 250);

    // 3) hero move for profile block once profile animation ends
    setTimeout(() => {
      intro.classList.add("moveIntro");
      profile.classList.add("move");
    }, 200 + profileInMs);

    // 4) background clear + greeting
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
    }, 200 + profileInMs + 300);

    // 5) bottom taskbar slide up
    setTimeout(() => {
      taskbar.classList.add("show");
    }, 200 + profileInMs + 600);

  }, 800);

  /* ABOUT OPEN/CLOSE */
  let opened = false;

  aboutBtn.onclick = () => {
    opened = !opened;
    about.classList.toggle("show", opened);
    bg.classList.toggle("bg-about", opened);
    greeting.classList.toggle("blur", opened);
  };

  homeBtn.onclick = () => {
    opened = false;
    about.classList.remove("show");
    bg.classList.remove("bg-about");
    greeting.classList.remove("blur");
  };

});
