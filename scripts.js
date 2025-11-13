// script.js
// Ensure this file is loaded with defer from index.html

// -------------------- Event data (single source of truth) --------------------





const events = [
    // Day 1
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "keynote.jpg"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "bmt-quiz-2-events-07/workshop-js.jpg"
    },

 {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "cybersecurity.jpg"
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "quantum.jpg"
    },
 {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "mixer.jpg"
    },
// Day 2
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "images/ethics.jpg"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "images/scalable.jpg"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "images/react.jpg"
    },
{
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "images/psychology-ux.jpg"
    },
 {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "panel-remote.jpg"
    },

    // Day 3
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "images/ui-ux.jpg"
    },
{
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "images/serverless.jpg"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "images/webassembly.jpg"
    },
 {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "images/d3.jpg"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "images/panel-ama.jpg"
    },
 // Bonus / Past Events
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "images/hackathon.jpg"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "images/api.jpg"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "images/devops.jpg"
    },
 {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "images/mobile-first.jpg"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "images/awards.jpg"
    }
];
// -------------------- Utilities --------------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const container = $('#event-container');
const searchInput = $('#search');
const filterButtons = () => $$('.filter-btn');
const resultsAria = $('#results-aria');

// sanitize regex special characters for search
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// format date nicely
function formatLocal(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString(undefined, {
    weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}
// create .ics file content
function generateICS(ev){
  const dtStart = new Date(ev.date);
  const dtEnd = new Date(dtStart.getTime() + (60 * 60 * 1000)); // assume 1 hour
  function fmt(d){
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TechCon//EN',
    'BEGIN:VEVENT',
    UID:${Date.now()}@techcon.local,
    DTSTAMP:${fmt(new Date())},
    DTSTART:${fmt(dtStart)},
    DTEND:${fmt(dtEnd)},
    SUMMARY:${ev.title},
    DESCRIPTION:${ev.description},
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}
// download blob with filename
function downloadBlob(content, filename, type='text/calendar;charset=utf-8') {
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// create Google Calendar link
function googleCalendarLink(ev){
  const start = new Date(ev.date);
  const end = new Date(start.getTime() + (60 * 60 * 1000));
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const params = new URLSearchParams({
    text: ev.title,
    details: ev.description,
    dates: ${fmt(start)}/${fmt(end)},
    sf: 'true',
    output: 'xml'
  });
  return https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()};
}
// -------------------- Rendering & State --------------------
let currentFilter = 'All';
let currentSearch = '';

// Keep track of interval timers for countdown to clear them when re-rendering
const countdownIntervals = new Map();

function clearCountdowns(){
  countdownIntervals.forEach((id) => clearInterval(id));
  countdownIntervals.clear();
}

// create card element for event
function createEventCard(ev, highlightRegex){
  const card = document.createElement('article');
  card.className = 'event-card entering';
  card.tabIndex = 0;
  card.setAttribute('aria-label', ${ev.title} — ${ev.type} — ${formatLocal(ev.date)});

  // Image
  const img = document.createElement('img');
  img.className = 'event-media';
  img.alt = ev.title;
  img.src = ev.image;
  img.loading = 'lazy';
  card.appendChild(img);

   // body
  const body = document.createElement('div');
  body.className = 'event-body';

  const pill = document.createElement('div');
  pill.className = 'type-pill';
  pill.textContent = ev.type;
  body.appendChild(pill);

  const h2 = document.createElement('h2');
  h2.className = 'event-title';
  h2.innerHTML = highlightText(ev.title, highlightRegex);
  body.appendChild(h2);

  const desc = document.createElement('p');
  desc.className = 'event-desc';
  desc.innerHTML = highlightText(ev.description, highlightRegex);
  body.appendChild(desc);

  const meta = document.createElement('div');
  meta.className = 'event-meta';

  const dateSpan = document.createElement('div');
  dateSpan.className = 'small';
  dateSpan.textContent = formatLocal(ev.date);
  meta.appendChild(dateSpan);

  const countdown = document.createElement('div');
  countdown.className = 'countdown';
  countdown.textContent = ''; // we'll fill this below
  meta.appendChild(countdown);

  body.appendChild(meta);

  // actions
  const actions = document.createElement('div');
  actions.className = 'event-actions';

  // Add to calendar (.ics)
  const icsBtn = document.createElement('button');
  icsBtn.className = 'btn ghost';
  icsBtn.type = 'button';
  icsBtn.textContent = 'Add .ics';
  icsBtn.addEventListener('click', () => {
    const content = generateICS(ev);
    downloadBlob(content, ${ev.title.replace(/\s+/g,'_')}.ics);
  });
  actions.appendChild(icsBtn);

   // Google Calendar link
  const gLink = document.createElement('a');
  gLink.className = 'btn ghost';
  gLink.href = googleCalendarLink(ev);
  gLink.target = '_blank';
  gLink.rel = 'noopener noreferrer';
  gLink.textContent = 'Google Calendar';
  actions.appendChild(gLink);

  // primary action: view details (for demo it just focuses the card)
  const viewBtn = document.createElement('button');
  viewBtn.className = 'btn primary';
  viewBtn.type = 'button';
  viewBtn.textContent = 'View';
  viewBtn.addEventListener('click', () => {
    card.focus();
    card.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }], { duration: 350 });
  });
  actions.appendChild(viewBtn);

  body.appendChild(actions);

  card.appendChild(body);

  // countdown logic
  const target = new Date(ev.date).getTime();

  function updateCountdown(){
    const now = Date.now();
    let diff = target - now;
    if(diff <= 0){
      countdown.textContent = 'Event has ended';
      countdown.classList.add('ended');
      return;
    }
const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);
    const minutes = Math.floor(diff / (1000*60));
    diff -= minutes * (1000*60);
    const seconds = Math.floor(diff / 1000);
    countdown.textContent = ${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s;
  }

  // initial update
  updateCountdown();
  // set interval
  const id = setInterval(updateCountdown, 1000);
  countdownIntervals.set(card, id);

    // small helper
  function pad(n){ return String(n).padStart(2,'0'); }

  // animate entering -> set class after next frame
  requestAnimationFrame(() => {
    card.classList.remove('entering');
    card.classList.add('entered');
  });

  return card;
}

// highlight matching substrings in text using <mark>
function highlightText(text, regex){
  if(!regex) return escapeHtml(text);
  // replace matches with <mark>
  return escapeHtml(text).replace(regex, (m) => <mark>${m}</mark>);
}

// simple escape to avoid injecting HTML from data (though data is trusted)
function escapeHtml(str){
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
}

// -------------------- Filtering & Searching --------------------
function getFilteredEvents(){
  // apply filter then search
  const f = currentFilter;
  const s = currentSearch.trim().toLowerCase();
  return events.filter(ev => {
    if(f !== 'All' && ev.type !== f) return false;
    if(!s) return true;
    return ev.title.toLowerCase().includes(s) || ev.description.toLowerCase().includes(s);
  });
}
// re-render grid with animation
function render(){
  clearCountdowns();
  const list = getFilteredEvents();

  // create highlight regex
  let highlightRegex = null;
  if(currentSearch.trim()){
    const escaped = escapeRegExp(currentSearch.trim());
    highlightRegex = new RegExp((${escaped}), 'ig');
  }
 // Use a simple diff: remove children not in new set and add new ones.
  // For simplicity, clear and re-add with animation.
  // But animate removal
  const existing = Array.from(container.children);

  // mark existing as leaving and remove with delay
  existing.forEach((el, idx) => {
    el.classList.add('leaving');
    setTimeout(() => {
      if(el.parentElement) el.remove();
    }, 220 + (idx * 10));
  });

  // after slight delay, append new cards
  setTimeout(() => {
    list.forEach(ev => {
      const card = createEventCard(ev, highlightRegex);
      container.appendChild(card);
    });
// update results ARIA
    const msg = list.length === events.length && currentFilter === 'All' && !currentSearch
      ? Showing all ${list.length} events
      : `Showing ${list.length} event${list.length !== 1 ? 's' : ''} ${currentFilter !== 'All' ? (${currentFilter}) : ''}${currentSearch ? ` matching "${currentSearch}"` : ''}.`;
    resultsAria.textContent = msg;
    // also update a polite announcer
    // set document title small update (optional)
    document.title = TechCon 2025 • ${list.length} events;
  }, 240);
}
// -------------------- UI wiring --------------------
function setupFilters(){
  filterButtons().forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons().forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });

    // allow keyboard activation with Enter and Space
    btn.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}
function setupSearch(){
  let timer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      currentSearch = e.target.value;
      render();
    }, 150);
  });

  // keyboard: Escape clears
  searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      searchInput.value = '';
      currentSearch = '';
      render();
    }
  });
}
// -------------------- Theme (detect + toggle + persist) --------------------
const root = document.documentElement;
const themeToggleBtn = $('#theme-toggle-btn');
const THEME_KEY = 'techcon_theme';

function applyTheme(dark){
  if(dark){
    root.classList.add('dark');
    themeToggleBtn.textContent = '☀';
    themeToggleBtn.setAttribute('aria-pressed','true');
  } else {
    root.classList.remove('dark');
    themeToggleBtn.textContent = '🌙';
    themeToggleBtn.setAttribute('aria-pressed','false');
  }
}
function detectSystemPrefersDark(){
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function loadTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === 'dark') return applyTheme(true);
  if(saved === 'light') return applyTheme(false);
  // otherwise apply system preference
  applyTheme(detectSystemPrefersDark());
}
// -------------------- Init --------------------
function init(){
  // set copyright year
  $('#copyright-year').textContent = new Date().getFullYear();

  setupFilters();
  setupSearch();
  setupThemeToggle();
  loadTheme();

  // initial render
  render();
}

// run init on DOMContentLoaded (script is defer so DOM is ready)
document.addEventListener('DOMContentLoaded', init);