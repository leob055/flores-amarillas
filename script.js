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

    const total = 35;

    for (let i = 0; i < total; i++) {

      const flower = document.createElement("div");
      flower.classList.add("flower");

      // PROFUNDIDAD (clave)
      const depth = Math.random(); // 0 a 1

      // forma de cúpula (ramo real)
      const angle = Math.random() * Math.PI;
      const radius = 100 * Math.sqrt(Math.random());

      const x = 160 + radius * Math.cos(angle);
      const y = 140 - radius * Math.sin(angle);

      // escala según profundidad
      const scale = 0.6 + depth * 0.7;

      // rotación ligera
      const rotate = (Math.random() - 0.5) * 40;

      flower.style.left = x + "px";
      flower.style.top = y + "px";
      flower.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

      // z-index para capas reales
      flower.style.zIndex = Math.floor(depth * 100);

      // pétalos múltiples
      for (let j = 0; j < 4; j++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.transform = `rotate(${j * 45}deg) scale(${1 - j * 0.15})`;
        flower.appendChild(petal);
      }

      const center = document.createElement("div");
      center.classList.add("center");
      flower.appendChild(center);

      bouquet.appendChild(flower);

      setTimeout(() => {
        flower.classList.add("show");
      }, i * 40);
    }
  }

});
