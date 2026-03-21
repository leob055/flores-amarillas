const trigger = document.getElementById("trigger");
const bouquet = document.getElementById("bouquet");
const message = document.getElementById("message");

trigger.addEventListener("click", () => {
  createBouquet();

  setTimeout(() => {
    bouquet.classList.add("move"); // se van a la esquina
  }, 2000);

  setTimeout(() => {
    message.classList.add("show");
  }, 3000);
});

function createBouquet() {
  bouquet.innerHTML = "";

  const total = 25; // cantidad de flores (tupido)
  const radius = 100;

  for (let i = 0; i < total; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // distribución circular compacta (tipo ramo real)
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * radius;

    const x = 150 + r * Math.cos(angle);
    const y = 120 + r * Math.sin(angle);

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    bouquet.appendChild(flower);

    // aparición escalonada
    setTimeout(() => {
      flower.classList.add("show");
    }, i * 80);
  }
}
