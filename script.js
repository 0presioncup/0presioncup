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

const categoryData = {
  sub12: [
    ["Tiburones", "Leones", "Águilas", "Panteras"],
    ["Halcones", "Pumas", "Cóndores", "Lobos"],
    ["Tigres", "Toros", "Fénix", "Jaguares"],
    ["Dragones", "Rinocerontes", "Osos", "Linces"]
  ],
  sub16: [
    ["Relámpagos", "Huracanes", "Truenos", "Tornados"],
    ["Rockets", "Cometas", "Satélites", "Meteoritos"],
    ["Sharks", "Piratas", "Cazadores", "Exploradores"],
    ["Guerreros", "Samuráis", "Vikingos", "Espartanos"]
  ],
  libre: [
    ["Equipo A", "Equipo B", "Equipo C", "Equipo D"],
    ["Equipo E", "Equipo F", "Equipo G", "Equipo H"],
    ["Equipo I", "Equipo J", "Equipo K", "Equipo L"],
    ["Equipo M", "Equipo N", "Equipo O", "Equipo P"]
  ],
  femenino: [
    ["Reinas", "Estrellas", "Fieras", "Valquirias"],
    ["Amazonas", "Centellas", "Luz", "Guerreras"],
    ["Sirenas", "Panteras", "Águilas", "Leonas"],
    ["Soles", "Lunas", "Estelas", "Brisas"]
  ]
};

const categorySelect = document.getElementById("categorySelect");
const groupContainer = document.getElementById("groupContainer");

categorySelect.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;
  const groups = categoryData[selectedCategory];

  groupContainer.innerHTML = ""; // limpiar anteriores

  groups.forEach((teams, index) => {
    const groupBox = document.createElement("div");
    groupBox.classList.add("group-box");

    const title = document.createElement("h3");
    title.classList.add("group-title");
    title.textContent = `Grupo ${String.fromCharCode(65 + index)}`;

    groupBox.appendChild(title);

    teams.forEach(team => {
      const teamElement = document.createElement("p");
      teamElement.classList.add("group-team");
      teamElement.textContent = team;
      groupBox.appendChild(teamElement);
    });

    groupContainer.appendChild(groupBox);
  });
});

