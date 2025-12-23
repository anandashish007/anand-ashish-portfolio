document.addEventListener("DOMContentLoaded", () => {
  const profile  = document.getElementById("profile");
  const caption  = document.getElementById("caption");
  const intro    = document.getElementById("intro");
  const taskbar  = document.getElementById("taskbar");
  const about    = document.getElementById("about");
  const bg       = document.querySelector(".background");
  const greeting = document.getElementById("greeting");
  const aboutBtn = document.getElementById("aboutBtn");
  const homeBtn  = document.getElementById("homeBtn");

  /* ========== GREETING (INDIAN TIME) ========== */
  const hour = new Date().getHours();
  let greetText = "GOOD EVENING";

  if (hour >= 5 && hour < 12) greetText = "GOOD MORNING";
  else if (hour >= 12 && hour < 17) greetText = "GOOD AFTERNOON";

  if (greeting) greeting.textContent = greetText;

  /* ========== INITIAL BACKGROUND STATE ========== */
  if (bg) {
    bg.classList.remove("bg-clear", "bg-about");
    bg.classList.add("bg-intro");
  }

  /* ========== INTRO SEQUENCE ========== */

  // 1️⃣ Profile appears (slide up + fade)
  setTimeout(() => {
    profile?.classList.add("show");
  }, 300);

  // 2️⃣ Caption appears (0.1s delay)
  setTimeout(() => {
    caption?.classList.add("show");
  }, 400);

  // 3️⃣ Profile hero move + caption exit
  setTimeout(() => {
    profile?.classList.add("move");
    caption?.classList.add("hide");
  }, 2300);

  // 4️⃣ Background clears + greeting appears
  setTimeout(() => {
    if (bg) {
      bg.classList.remove("bg-intro");
      bg.classList.add("bg-clear");
    }
    greeting?.classList.add("show");
  }, 2600);

  // 5️⃣ Intro fades, taskbar slides down from top
  setTimeout(() => {
    intro?.classList.add("hide");
    taskbar?.classList.add("show");
  }, 3000);

  /* ========== ABOUT BUTTON ========== */
  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      about.style.display = "block";

      if (bg) {
        bg.classList.remove("bg-clear");
        bg.classList.add("bg-about");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ========== HOME BUTTON ========== */
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      // Hide About section
      about.style.display = "none";

      // Restore normal background
      if (bg) {
        bg.classList.remove("bg-about");
        bg.classList.add("bg-clear");
      }

      // Smooth scroll back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
