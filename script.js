document.addEventListener("DOMContentLoaded", () => {
  /* ================= ELEMENTS ================= */
  const profile   = document.getElementById("profile");
  const caption   = document.getElementById("caption");
  const loader    = document.getElementById("loader");
  const taskbar   = document.getElementById("taskbar");
  const greeting  = document.getElementById("greeting");
  const bg        = document.querySelector(".background");
  const about     = document.getElementById("about");
  const aboutBtn  = document.getElementById("aboutBtn");
  const homeBtn   = document.getElementById("homeBtn");

  if (!profile || !caption || !taskbar || !bg) return;

  /* ================= GREETING (INDIAN TIME) ================= */
  if (greeting) {
    const hour = new Date().getHours();
    greeting.textContent =
      hour < 12 ? "GOOD MORNING" :
      hour < 17 ? "GOOD AFTERNOON" :
      "GOOD EVENING";
  }

  /* ================= INITIAL STATES ================= */
  bg.classList.remove("bg-clear", "bg-about");

  let aboutOpen = false;

  /* ================= INTRO SEQUENCE ================= */

  // 1️⃣ Loader delay (1s)
  setTimeout(() => {
    if (loader) loader.classList.add("hide");

    // 2️⃣ Profile appears
    setTimeout(() => {
      profile.classList.add("show");
    }, 300);

    // 3️⃣ Caption appears (0.1s later)
    setTimeout(() => {
      caption.classList.add("show");
    }, 400);

    // 4️⃣ Hero transition
    setTimeout(() => {
      profile.classList.add("move");
      caption.classList.add("hide");
    }, 2400);

    // 5️⃣ Background clears + greeting appears
    setTimeout(() => {
      bg.classList.add("bg-clear");
      if (greeting) greeting.classList.add("show");
    }, 2700);

    // 6️⃣ Taskbar slides in
    setTimeout(() => {
      taskbar.classList.add("show");
    }, 3200);

  }, 1000);

  /* ================= ABOUT TOGGLE ================= */
  if (aboutBtn && about) {
    aboutBtn.addEventListener("click", () => {
      aboutOpen = !aboutOpen;

      if (aboutOpen) {
        about.classList.add("show");
        bg.classList.add("bg-about");

        if (greeting) greeting.classList.add("blur");
      } else {
        about.classList.remove("show");
        bg.classList.remove("bg-about");

        if (greeting) greeting.classList.remove("blur");
      }
    });
  }

  /* ================= HOME BUTTON ================= */
  if (homeBtn && about) {
    homeBtn.addEventListener("click", () => {
      aboutOpen = false;

      about.classList.remove("show");
      bg.classList.remove("bg-about");

      if (greeting) greeting.classList.remove("blur");
    });
  }
});
