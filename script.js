document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("trigger");
  const bouquet = document.getElementById("bouquet");
  const message = document.getElementById("message");

  trigger.addEventListener("click", () => {

    bouquet.classList.add("show");

    setTimeout(() => {
      message.classList.add("show");
    }, 1200);

  });

});
