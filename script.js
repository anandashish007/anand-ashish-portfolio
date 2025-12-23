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

  /* GREETING */
  const h = new Date().getHours();
  greeting.textContent =
    h < 12 ? "GOOD MORNING" :
    h < 17 ? "GOOD AFTERNOON" :
    "GOOD EVENING";

  /* INTRO SEQUENCE */
  setTimeout(() => {

    loader.classList.add("hide");

    setTimeout(() => profile.classList.add("show"), 300);
    setTimeout(() => caption.classList.add("show"), 400);

    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("hide");
    }, 2400);

    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
    }, 2700);

    setTimeout(() => taskbar.classList.add("show"), 3200);

  }, 1000);

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
