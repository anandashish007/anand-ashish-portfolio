document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");
  const caption = document.getElementById("caption");
  const taskbar = document.getElementById("taskbar");
  const about = document.getElementById("about");
  const typing = document.getElementById("typing");
  const intro = document.getElementById("intro");

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
  // 5 Intro exits (THIS IS THE MISSING PART)
setTimeout(() => {
   intro.classList.add("hide");
 }, 3400);

  // 6 Taskbar appears
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
      "I am a Computer Science and Engineering student with a heart full of ambition and a mind wired for logic.
From the first line of code I wrote, I felt drawn to the world of software and innovation.
I believe technology is not just about machines, but about shaping a better future for people.
My goal is to become a successful software engineer who creates meaningful and efficient solutions.
I am constantly learning new programming languages and improving my problem-solving skills.
Challenges motivate me, and failures teach me lessons that push me forward.
I know that consistency and discipline are the true keys to achievement.
Every day, I work harder to strengthen my technical and analytical abilities.
I dream of contributing to real-world projects that make life smarter and simpler.
Time management and self-improvement guide my daily routine.
I aim to balance knowledge with creativity and logic with innovation.
My journey may be demanding, but my determination is stronger.
I trust the process and believe in steady growth.
With passion and perseverance, I am shaping my future step by step.
One day, I will proudly stand as a software engineer who turned dreams into reality.
";
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
