/* =======================================
   MAIN.JS — EL VIAJE PARA VOLVER A MÍ
   ======================================= */

/* -------- 1. ANIMACIÓN DE ENTRADA -------- */
// Aparece suavemente cada sección al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, header, main").forEach(sec => {
  observer.observe(sec);
});

/* -------- 2. EFECTO HOVER EN PERSONAJES -------- */
// Animación ligera adicional en hover
document.querySelectorAll(".personaje").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* -------- 3. MENÚ ACTIVO SEGÚN PÁGINA -------- */
// Marca el enlace activo en el menú según la URL
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* -------- 4. EFECTO DE FADE AL CARGAR -------- */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.8s ease-in";
});

/* -------- 5. SUAVIZAR DESPLAZAMIENTO INTERNO -------- */
// Si en el futuro se agregan anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
