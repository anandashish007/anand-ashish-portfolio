document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");
  const welcome = document.getElementById("welcome");
  const taskbar = document.getElementById("taskbar");
  const about = document.getElementById("about");
  const typing = document.getElementById("typing");

  setTimeout(() => profile.classList.add("move"), 1600);
  setTimeout(() => welcome.classList.add("show"), 2100);
  setTimeout(() => welcome.classList.add("hide"), 3800);
  setTimeout(() => taskbar.classList.add("show"), 4200);
  setTimeout(() => { about.style.display = "block"; typeText(); }, 5000);

  function typeText() {
    const text =
      "I am a Computer Science Engineering student with a strong academic background. I completed my SSC with 95% and my intermediate education with 60%. Currently, I am pursuing my undergraduate studies at Eluru College of Engineering and Technology, focusing on building strong technical skills and professional discipline.";
    let i = 0;
    typing.innerHTML = "";
    function type() {
      if (i < text.length) {
        typing.innerHTML += text.charAt(i++);
        setTimeout(type, 25);
      }
    }
    type();
  }
});
