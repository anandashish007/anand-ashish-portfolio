const certificates = [
  {
    name: "Android Developer Virtual Internship",
    file: "android-internship.jpg"
  },
  {
    name: "Smart India Hackathon",
    file: "sih-hackathon.jpg"
  }
];

// Auto-generate certificate cards
const container = document.getElementById("certContainer");

certificates.forEach(cert => {
  const card = document.createElement("a");
  card.href = `certificates/${cert.file}`;
  card.target = "_blank";
  card.className = "cert-card";

  card.innerHTML = `
    <h3>${cert.name}</h3>
    <p>Click to view</p>
  `;

  container.appendChild(card);
});
