document.addEventListener("DOMContentLoaded", () => {
  const loader   = document.getElementById("loader");
  const profile  = document.getElementById("profile");
  const welcome  = document.getElementById("caption");
  const taskbar  = document.getElementById("taskbar");
  const greeting = document.getElementById("greeting");
  const bg       = document.querySelector(".background");
  const about    = document.getElementById("about");
  const aboutBtn = document.getElementById("aboutBtn");
  const homeBtn  = document.getElementById("homeBtn");

  /* GREETING TEXT */
  const h = new Date().getHours();
  greeting.textContent =
    h < 12 ? "GOOD MORNING" :
    h < 17 ? "GOOD AFTERNOON" :
    "GOOD EVENING";

  /* INTRO SEQUENCE */
  setTimeout(() => {
    loader.classList.add("hide");

    /* profile in */
    setTimeout(() => {
      profile.classList.add("show");
    }, 200);

    /* welcome in (0.1s later) */
    setTimeout(() => {
      welcome.classList.add("show");
    }, 300);

    /* hero move (continuous, no pause) */
    setTimeout(() => {
      profile.classList.add("move");
    }, 1200);

    /* background + greeting */
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
    }, 1400);

    /* taskbar */
    setTimeout(() => {
      taskbar.classList.add("show");
    }, 1700);

  }, 1000);

  /* ABOUT TOGGLE */
  if (aboutBtn) {
    aboutBtn.onclick = () => {
      about.classList.toggle("show");
      bg.classList.toggle("bg-about");
      greeting.classList.toggle("blur");
      welcome.classList.toggle("blur");
    };
  }

  if (homeBtn) {
    homeBtn.onclick = () => {
      about.classList.remove("show");
      bg.classList.remove("bg-about");
      greeting.classList.remove("blur");
      welcome.classList.remove("blur");
    };
  }
});
