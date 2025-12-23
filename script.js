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

  /* INTRO SEQUENCE */
  setTimeout(() => {

    loader.classList.add("hide");

    // 1) profile and caption appear
    setTimeout(() => profile.classList.add("show"), 200);
    setTimeout(() => {
      caption.classList.add("show");
      // start subtle pulse after initial grow
      setTimeout(() => caption.classList.add("pulse"), 900);
    }, 350);

    // 2) after intro anim finishes, move profile to hero
    const introDuration = 900; // matches profile transition
    setTimeout(() => {
      intro.classList.add("moveIntro"); // only profile container moves
      profile.classList.add("move");
    }, 350 + introDuration + 150);

    // 3) BG, greeting, taskbar
    setTimeout(() => {
      bg.classList.add("bg-clear");
      greeting.classList.add("show");
    }, 350 + introDuration + 150 + 300);

    setTimeout(() => taskbar.classList.add("show"),
      350 + introDuration + 150 + 600
    );

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
