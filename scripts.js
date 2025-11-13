const events = [
  // Paste the full events array from your assignment here 👇
  {
    title: "Opening Keynote: The Future of AI",
    type: "Keynote",
    date: "2025-11-20T09:00:00",
    description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
    image: "bmt-quiz-2-events-07/keynote.jpg"
  },
  // ... add the rest of the events from your provided list
];

const container = document.getElementById("event-container");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-btn");

// --- Theme handling ---
const themeToggle = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem("theme");
if (storedTheme) document.documentElement.dataset.theme = storedTheme;

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = current;
  localStorage.setItem("theme", current);
  themeToggle.textContent = current === "dark" ? "☀" : "🌙";
});

// --- Render events ---
function renderEvents(list) {
  container.innerHTML = "";
  list.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.title;

    const content = document.createElement("div");
    content.classList.add("event-content");

    const title = document.createElement("h2");
    title.textContent = event.title;

    const meta = document.createElement("p");
    meta.classList.add("event-meta");
    const dateObj = new Date(event.date);
    meta.textContent = Type: ${event.type} • Date: ${dateObj.toLocaleString()};

    const desc = document.createElement("p");
    desc.classList.add("event-description");
    desc.textContent = event.description;

    const actions = document.createElement("div");
    actions.classList.add("card-actions");

    const addBtn = document.createElement("a");
    addBtn.textContent = "Add to Calendar";
    const gcalUrl = https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&dates=${event.date.replace(/[-:]/g, "").slice(0, 15)}Z/${event.date.replace(/[-:]/g, "").slice(0, 15)}Z;
    addBtn.href = gcalUrl;
    addBtn.target = "_blank";

    const countdown = document.createElement("span");
    countdown.classList.add("countdown");
    updateCountdown(countdown, event.date);
    setInterval(() => updateCountdown(countdown, event.date), 1000);

    actions.append(addBtn, countdown);
    content.append(title, meta, desc, actions);
    card.append(img, content);
    container.append(card);
  });
}

function updateCountdown(el, dateStr) {
  const now = new Date();
  const eventDate = new Date(dateStr);
  const diff = eventDate - now;
  if (diff <= 0) {
    el.textContent = "Event has ended";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  el.textContent = ${days}d ${hours}h ${minutes}m ${seconds}s;
}

// --- Filter events ---
let currentFilter = "All";
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.type;
    applyFilters();
  });
});

// --- Search events ---
searchInput.addEventListener("input", applyFilters);

function applyFilters() {
  const term = searchInput.value.toLowerCase();
  const filtered = events.filter(e => {
    const matchType = currentFilter === "All" || e.type === currentFilter;
    const matchText = e.title.toLowerCase().includes(term) || e.description.toLowerCase().includes(term);
    return matchType && matchText;
  });
  renderEvents(filtered);
}

// Initial render
renderEvents(events);