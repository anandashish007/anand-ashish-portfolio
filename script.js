document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");
  const caption = document.getElementById("caption");
  const taskbar = document.getElementById("taskbar");
  const about = document.getElementById("about");
  const typing = document.getElementById("typing");

  // 1️⃣ Profile appears
  setTimeout(() => {
    profile.classList.add("show");
  }, 400);

  // 2️⃣ Caption appears while profile is locked
  setTimeout(() => {
    caption.classList.add("show");
  }, 900);

  // 3️⃣ Profile moves to second position
  setTimeout(() => {
    profile.classList.add("move");
  }, 2600);

  // 4️⃣ Caption disappears AFTER profile moves
  setTimeout(() => {
    caption.classList.add("hide");
  }, 3000);

  // 5️⃣ Taskbar appears
  setTimeout(() => {
    taskbar.classList.add("show");
  }, 3400);

  // 6️⃣ About Me appears + typing
  setTimeout(() => {
    about.style.display = "block";
    typeText();
  }, 3800);

  function typeText() {
    const text =
      "I am a Computer Science Engineering student with a strong academic background and a focused interest in building a solid foundation in technology and problem-solving...";
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
