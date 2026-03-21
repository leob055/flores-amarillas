const trigger = document.getElementById("trigger");
const stems = document.querySelectorAll(".stem");
const flowers = document.querySelectorAll(".flower");
const message = document.getElementById("message");

trigger.addEventListener("click", () => {

  // Animar tallos primero
  stems.forEach((stem, i) => {
    setTimeout(() => {
      stem.classList.add("grow");
    }, i * 200);
  });

  // Luego flores
  flowers.forEach((flower, i) => {
    setTimeout(() => {
      flower.classList.add("bloom");
    }, 800 + i * 200);
  });

  // Mensaje final
  setTimeout(() => {
    message.classList.add("show");
  }, 1800);

});
