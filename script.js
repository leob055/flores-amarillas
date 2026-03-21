document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("trigger");
  const scene = document.getElementById("scene");
  const bouquet = document.getElementById("bouquet");
  const message = document.getElementById("message");

  trigger.addEventListener("click", () => {

    scene.classList.add("show");
    createBouquet();

    setTimeout(() => {
      message.classList.add("show");
    }, 2500);

  });

  function createBouquet() {
    bouquet.innerHTML = "";

    const total = 28;
    const centerX = 160;
    const centerY = 120;
    const radius = 100;

    for (let i = 0; i < total; i++) {

      const flower = document.createElement("div");
      flower.classList.add("flower");

      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      flower.style.left = x + "px";
      flower.style.top = y + "px";

      // pétalos (simulan rosa)
      for (let j = 0; j < 3; j++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.transform = `scale(${1 - j * 0.2})`;
        flower.appendChild(petal);
      }

      const center = document.createElement("div");
      center.classList.add("center");
      flower.appendChild(center);

      bouquet.appendChild(flower);

      setTimeout(() => {
        flower.classList.add("show");
      }, i * 60);
    }
  }

});
