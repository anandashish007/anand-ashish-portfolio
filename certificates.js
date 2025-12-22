document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cert-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 120);
  });
});
