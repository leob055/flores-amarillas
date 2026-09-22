document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("trigger");
  const bouquet = document.getElementById("bouquet");
  const message = document.getElementById("message");

  trigger.addEventListener("click", () => {

    // vibración (solo móvil compatible)
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }

    bouquet.classList.add("show");

    setTimeout(() => {
      message.classList.add("show");
    }, 1500);

    // Iniciar lluvia de girasoles al presionar el botón
    startSunflowerRain();

  });

  // FUNCIÓN PARA CREAR UN GIRASOL CAYENDO
  function createSunflower() {
    const sunflower = document.createElement("div");
    sunflower.classList.add("sunflower");
    sunflower.innerText = "🌻";

    // Posición horizontal aleatoria
    sunflower.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio entre 20px y 40px
    const size = Math.random() * 20 + 20; 
    sunflower.style.fontSize = size + "px";

    // Tiempo de caída aleatorio entre 3 y 6 segundos
    const duration = Math.random() * 3 + 3;
    sunflower.style.animationDuration = duration + "s";

    document.body.appendChild(sunflower);

    // Limpieza automática del DOM al terminar la animación
    setTimeout(() => {
      sunflower.remove();
    }, duration * 1000);
  }

  // GENERADOR CONTINUO DE GIRASOLES
  function startSunflowerRain() {
    setInterval(createSunflower, 250);
  }

  // PARTICULAS OPTIMIZADAS
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];

  const total = window.innerWidth < 500 ? 40 : 80;

  for (let i = 0; i < total; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      speed: Math.random() * 1 + 0.3
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,215,0,0.7)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    update();
  }

  function update() {
    particles.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
});
