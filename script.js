const bouquet = document.getElementById("bouquet");
const message = document.getElementById("message");

document.body.addEventListener("click", () => {
  bouquet.classList.remove("hidden");
  bouquet.classList.add("show");

  createBouquet();

  setTimeout(() => {
    message.classList.add("show");
  }, 1200);
});

function createBouquet() {
  bouquet.innerHTML = "";

  const positions = [
    { x: 80, y: 20 },
    { x: 40, y: 60 },
    { x: 120, y: 60 },
    { x: 20, y: 100 },
    { x: 140, y: 100 }
  ];

  positions.forEach((pos, i) => {
    // Stem
    const stem = document.createElement("div");
    stem.classList.add("stem");
    stem.style.left = pos.x + "px";
    stem.style.animationDelay = i * 0.2 + "s";

    // Flower
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = pos.x - 18 + "px";
    flower.style.top = pos.y + "px";
    flower.style.animationDelay = (0.5 + i * 0.2) + "s";

    bouquet.appendChild(stem);
    bouquet.appendChild(flower);
  });
}
