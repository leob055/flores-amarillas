document.addEventListener("click", (e) => {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌼";

  flower.style.left = e.clientX + "px";
  flower.style.top = e.clientY + "px";

  document.body.appendChild(flower);

  // Mostrar mensaje
  const message = document.getElementById("message");
  message.classList.add("show");
});