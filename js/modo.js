// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones con el id "toggle-mode"
  const toggleBtns = document.querySelectorAll("#toggle-mode");
  const body = document.body;

  // Al cargar, revisa si hay preferencia guardada
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      body.classList.toggle("light-mode");
      // Guarda la preferencia
      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  });
});
// ...existing code...