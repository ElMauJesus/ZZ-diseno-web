// Puedes poner esto en un archivo .js o dentro de <script> en tu HTML
// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main div[id]");
  const navLinks = document.querySelectorAll("#menu li a");

  function onScroll() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    let offset = 100; // Ajusta según tu header

    sections.forEach(section => {
      if (
        section.offsetTop - offset <= scrollPos &&
        section.offsetTop + section.offsetHeight - offset > scrollPos
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Para activar al cargar
});
// ...existing code...