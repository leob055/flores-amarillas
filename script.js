document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("trigger");
  const bouquet = document.getElementById("bouquet");
  const message = document.getElementById("message");

  trigger.addEventListener("click", () => {

    createBouquet();

    // mover a esquina
    setTimeout(() => {
      bouquet.classList.add("move");
    }, 2000);

    // mostrar mensaje
    setTimeout(() => {
      message.classList.add("show");
    }, 3000);
  });

  function createBouquet() {
    bouquet.innerHTML = "";

    const total = 30; // más tupido
    const centerX = 150;
    const centerY = 150;
    const radius = 90;

    for (let i = 0; i < total; i++) {

      const flower = document.createElement("div");
      flower.classList.add("flower");

      // distribución compacta tipo ramo
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      flower.style.left = x + "px";
      flower.style.top = y + "px";

      bouquet.appendChild(flower);

      // aparición progresiva
      setTimeout(() => {
        flower.classList.add("show");
      }, i * 50);
    }
  }

});
