const trigger = document.getElementById("trigger");
const bouquet = document.getElementById("bouquet");
const message = document.getElementById("message");

trigger.addEventListener("click", () => {
  createBouquet();

  setTimeout(() => {
    bouquet.classList.add("move");
  }, 2000);

  setTimeout(() => {
    message.classList.add("show");
  }, 3000);
});

function createBouquet() {
  bouquet.innerHTML = "";

  const total = 25;
  const centerX = 150;
  const centerY = 150;
  const radius = 90;

  for (let i = 0; i < total; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * radius;

    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    bouquet.appendChild(flower);

    setTimeout(() => {
      flower.classList.add("show");
    }, i * 60);
  }
}
