// Twitch embed
new Twitch.Embed("twitch-embed", {
  width: "100%",
  height: 400,
  channel: "elgrantorneo", // ⚠️ Reemplaza con el canal real
  layout: "video",
  theme: "dark",
});

// Tema oscuro / claro toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Al cargar la página, aplica el tema guardado
if (localStorage.getItem("tema") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "☀️"; // icono sol
} else {
  themeToggle.textContent = "🌙"; // icono luna
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("tema", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("tema", "light");
    themeToggle.textContent = "🌙";
  }
});

// Formulario de inscripción (ejemplo)
const form = document.querySelector(".team-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Aquí puedes añadir validaciones o enviar a servidor
  message.textContent = "¡Inscripción recibida! Pronto, nos pondremos en contacto contigo, mediante WhatsApp .";
  form.reset();
});
