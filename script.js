document.addEventListener("DOMContentLoaded", () => {
  const profile   = document.getElementById("profile");
  const caption   = document.getElementById("caption");
  const intro     = document.getElementById("intro");
  const taskbar   = document.getElementById("taskbar");
  const about     = document.getElementById("about");
  const bgWrap    = document.querySelector(".background-wrapper");
  const greeting  = document.getElementById("greeting");
  const aboutBtn  = document.getElementById("aboutBtn");
  const homeBtn   = document.getElementById("homeBtn");

  let aboutOpen = false;

  /* ================= GREETING (INDIAN TIME) ================= */
  const hour = new Date().getHours();
  let greetText = "GOOD EVENING";

  if (hour >= 5 && hour < 12) greetText = "GOOD MORNING";
  else if (hour >= 12 && hour < 17) greetText = "GOOD AFTERNOON";

  greeting.textContent = greetText;

  /* ================= INITIAL STATE ================= */
  bgWrap.classList.add("bg-intro");

  /* ================= INTRO SEQUENCE ================= */

  // 1️⃣ Profile appears (slide-up + fade)
  setTimeout(() => {
    profile.classList.add("show");
  }, 300);

  // 2️⃣ Caption appears (0.1s delay)
  setTimeout(() => {
    caption.classList.add("show");
  }, 400);

  // 3️⃣ Hero transition (profile moves, caption exits)
  setTimeout(() => {
    profile.classList.add("move");
    caption.classList.add("hide");
  }, 2300);

  // 4️⃣ Background clears + greeting appears
  setTimeout(() => {
    bgWrap.classList.remove("bg-intro");
    bgWrap.classList.add("bg-clear");
    greeting.classList.add("show");
  }, 2600);

  // 5️⃣ Intro fades + taskbar slides DOWN from top
  setTimeout(() => {
    intro.classList.add("hide");
    taskbar.classList.add("show");
  }, 3000);

  /* ================= ABOUT TOGGLE ================= */
  aboutBtn.addEventListener("click", () => {
    aboutOpen = !aboutOpen;

    if (aboutOpen) {
      about.style.display = "block";
      bgWrap.classList.remove("bg-clear");
      bgWrap.classList.add("bg-about");
    } else {
      about.style.display = "none";
      bgWrap.classList.remove("bg-about");
      bgWrap.classList.add("bg-clear");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ================= HOME BUTTON ================= */
  homeBtn.addEventListener("click", () => {
    aboutOpen = false;
    about.style.display = "none";

    bgWrap.classList.remove("bg-about");
    bgWrap.classList.add("bg-clear");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
