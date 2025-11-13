
        // ===== EVENT DATA =====
        const events = [
            // --- Day 1: Nov 20, 2025 ---
            {
                title: "Opening Keynote: The Future of AI",
                type: "Keynote",
                date: "2025-11-20T09:00:00",
                description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation and its transformative impact on society.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Advanced JavaScript Workshop",
                type: "Workshop",
                date: "2025-11-20T10:30:00",
                description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features with practical coding exercises.",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Cybersecurity in the Cloud Era",
                type: "Talk",
                date: "2025-11-20T11:00:00",
                description: "Explore the evolving landscape of cloud security threats and proactive defense strategies with industry experts.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Introduction to Quantum Computing",
                type: "Talk",
                date: "2025-11-20T14:00:00",
                description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing as we know it.",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Networking Mixer & Welcome Reception",
                type: "Social",
                date: "2025-11-20T17:00:00",
                description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers in a relaxed setting.",
                image: "bmt-quiz-2-events-07/ethics.jpg"
            },

            // --- Day 2: Nov 21, 2025 ---
            {
                title: "The Ethics of Machine Learning",
                type: "Talk",
                date: "2025-11-21T09:30:00",
                description: "A critical discussion on the societal impact and ethical responsibilities in ML development and deployment.",
                image: "https://images.unsplash.com/photo-1555252333-9f8dd8a57e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Building Scalable Web Apps with Microservices",
                type: "Talk",
                date: "2025-11-21T10:30:00",
                description: "Learn the principles of microservices architecture from lead engineers at a top tech company.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Mastering React Performance",
                type: "Workshop",
                date: "2025-11-21T13:00:00",
                description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis techniques.",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "The Psychology of User Experience (UX)",
                type: "Talk",
                date: "2025-11-21T14:00:00",
                description: "Understand the cognitive biases and psychological principles that drive effective UX design decisions.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Panel: The Future of Remote Work in Tech",
                type: "Panel",
                date: "2025-11-21T16:00:00",
                description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
                image: "https://images.unsplash.com/photo-1551836026-d5c88acdc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },

            // --- Day 3: Nov 22, 2025 ---
            {
                title: "UI/UX Design Fundamentals for Developers",
                type: "Workshop",
                date: "2025-11-22T09:00:00",
                description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "From Monolith to Serverless",
                type: "Talk",
                date: "2025-11-22T10:00:00",
                description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "State of Web Assembly in 2025",
                type: "Talk",
                date: "2025-11-22T11:30:00",
                description: "Discover how WebAssembly is enabling near-native performance for web applications across platforms.",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Data Visualization with D3.js",
                type: "Workshop",
                date: "2025-11-22T13:30:00",
                description: "Learn to create stunning, interactive data visualizations for the web from scratch using D3.js.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Closing Panel: Ask Me Anything with Speakers",
                type: "Panel",
                date: "2025-11-22T16:00:00",
                description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },

            // --- Bonus Events ---
            {
                title: "Pre-Conference Hackathon",
                type: "Social",
                date: "2025-11-19T09:00:00",
                description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
                image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "API Design Best Practices",
                type: "Talk",
                date: "2025-11-21T15:00:00",
                description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "DevOps Culture and Tooling",
                type: "Talk",
                date: "2025-11-20T15:30:00",
                description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Mobile-First Design in Practice",
                type: "Workshop",
                date: "2025-11-20T13:00:00",
                description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Closing Ceremony & Awards",
                type: "Social",
                date: "2025-11-22T17:30:00",
                description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
                image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // ===== DOM ELEMENTS =====
        const eventsContainer = document.getElementById('events-container');
        const searchInput = document.getElementById('search-input');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const themeToggle = document.getElementById('theme-toggle');
        const noEventsMessage = document.getElementById('no-events-message');

        // ===== STATE VARIABLES =====
        let currentFilter = 'all';
        let currentSearchTerm = '';
        let darkMode = false;

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', function() {
            // Check for saved theme preference or respect OS preference
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                enableDarkMode();
            }
            
            // Display all events initially
            displayEvents(events);
            
            // Set up event listeners
            setupEventListeners();
            
            // Start countdown timers
            startCountdowns();
        });

        // ===== EVENT LISTENERS SETUP =====
        function setupEventListeners() {
            // Search input event
            searchInput.addEventListener('input', function(e) {
                currentSearchTerm = e.target.value.toLowerCase();
                filterEvents();
            });

            // Filter button events
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update current filter
                    currentFilter = this.getAttribute('data-filter');
                    filterEvents();
                });
            });

            // Theme toggle event
            themeToggle.addEventListener('click', toggleTheme);
        }

        // ===== DISPLAY EVENTS FUNCTION =====
        function displayEvents(eventsToDisplay) {
            // Clear the container
            eventsContainer.innerHTML = '';
            
            if (eventsToDisplay.length === 0) {
                noEventsMessage.classList.remove('hidden');
                return;
            } else {
                noEventsMessage.classList.add('hidden');
            }
            
            // Group events by day
            const eventsByDay = groupEventsByDay(eventsToDisplay);
            
            // Create HTML for each day
            for (const [day, dayEvents] of Object.entries(eventsByDay)) {
                const daySection = document.createElement('div');
                daySection.className = 'day-section';
                
                // Create day header
                const dayHeader = document.createElement('div');
                dayHeader.className = 'day-header';
                
                const dayTitle = document.createElement('h2');
                dayTitle.textContent = getDayTitle(day);
                
                const dayDate = document.createElement('span');
                dayDate.className = 'day-date';
                dayDate.textContent = formatDate(new Date(day));
                
                dayHeader.appendChild(dayTitle);
                dayHeader.appendChild(dayDate);
                daySection.appendChild(dayHeader);
                
                // Create event cards for this day
                dayEvents.forEach(event => {
                    const eventCard = createEventCard(event);
                    daySection.appendChild(eventCard);
                });
                
                eventsContainer.appendChild(daySection);
            }
            
            // Restart countdowns for newly displayed events
            startCountdowns();
        }

        // ===== CREATE EVENT CARD =====
        function createEventCard(event) {
            const eventDate = new Date(event.date);
            const now = new Date();
            const timeDiff = eventDate.getTime() - now.getTime();
            
            const card = document.createElement('div');
            card.className = 'event-card';
            card.setAttribute('data-type', event.type);
            card.setAttribute('data-date', event.date);
            
            // Determine countdown text
            let countdownText = '';
            let countdownClass = 'countdown';
            
            if (timeDiff < 0) {
                countdownText = 'Event ended';
                countdownClass += ' ended';
            } else if (timeDiff < 24 * 60 * 60 * 1000) {
                countdownText = 'Today!';
                countdownClass += ' soon';
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                countdownText = `${days} day${days !== 1 ? 's' : ''} left`;
            }
            
            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}" class="event-image">
                <div class="event-content">
                    <div class="event-header">
                        <h3 class="event-title">${event.title}</h3>
                        <span class="event-type">${event.type}</span>
                    </div>
                    <div class="event-meta">
                        <div class="event-date">
                            <i class="far fa-calendar"></i>
                            <span>${formatDate(eventDate)}</span>
                        </div>
                        <div class="event-time">
                            <i class="far fa-clock"></i>
                            <span>${formatTime(eventDate)}</span>
                        </div>
                    </div>
                    <p class="event-description">${event.description}</p>
                    <div class="event-actions">
                        <div class="${countdownClass}" id="countdown-${event.date}">${countdownText}</div>
                        <button class="calendar-btn" onclick="addToCalendar('${event.title}', '${event.description}', '${event.date}')">
                            <i class="far fa-calendar-plus"></i> Add to Calendar
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        // ===== FILTER EVENTS =====
        function filterEvents() {
            let filteredEvents = events;
            
            // Apply type filter
            if (currentFilter !== 'all') {
                filteredEvents = filteredEvents.filter(event => event.type === currentFilter);
            }
            
            // Apply search filter
            if (currentSearchTerm) {
                filteredEvents = filteredEvents.filter(event => 
                    event.title.toLowerCase().includes(currentSearchTerm) || 
                    event.description.toLowerCase().includes(currentSearchTerm)
                );
            }
            
            // Display filtered events
            displayEvents(filteredEvents);
        }

        // ===== COUNTDOWN FUNCTIONALITY =====
        function startCountdowns() {
            // Update countdowns every second
            setInterval(updateCountdowns, 1000);
            updateCountdowns(); // Initial call
        }

        function updateCountdowns() {
            const now = new Date().getTime();
            
            document.querySelectorAll('.event-card').forEach(card => {
                const eventDate = new Date(card.getAttribute('data-date')).getTime();
                const countdownElement = card.querySelector('.countdown');
                
                if (!countdownElement) return;
                
                const timeDiff = eventDate - now;
                
                if (timeDiff < 0) {
                    countdownElement.textContent = 'Event ended';
                    countdownElement.className = 'countdown ended';
                } else if (timeDiff < 24 * 60 * 60 * 1000) {
                    // Less than 24 hours
                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                    
                    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
                    countdownElement.className = 'countdown soon';
                } else {
                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    countdownElement.textContent = `${days} day${days !== 1 ? 's' : ''} left`;
                    countdownElement.className = 'countdown';
                }
            });
        }

        // ===== CALENDAR FUNCTIONALITY =====
        function addToCalendar(title, description, dateString) {
            const eventDate = new Date(dateString);
            
            // Format date for Google Calendar
            const startDate = eventDate.toISOString().replace(/-|:|\.\d+/g, '');
            const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
            
            // Create Google Calendar URL
            const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=TechCon%202025`;
            
            // Open in new tab
            window.open(googleCalendarUrl, '_blank');
            
            // Show confirmation (in a real app, you might use a toast notification)
            alert(`"${title}" has been added to your calendar!`);
        }

        // ===== THEME TOGGLE =====
        function toggleTheme() {
            if (darkMode) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        }

        function enableDarkMode() {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            darkMode = true;
            localStorage.setItem('theme', 'dark');
        }

        function disableDarkMode() {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            darkMode = false;
            localStorage.setItem('theme', 'light');
        }

        // ===== UTILITY FUNCTIONS =====
        function groupEventsByDay(events) {
            const groups = {};
            
            events.forEach(event => {
                const eventDate = new Date(event.date);
                const dayKey = eventDate.toDateString();
                
                if (!groups[dayKey]) {
                    groups[dayKey] = [];
                }
                
                groups[dayKey].push(event);
            });
            
            // Sort events within each day by time
            for (const day in groups) {
                groups[day].sort((a, b) => new Date(a.date) - new Date(b.date));
            }
            
            return groups;
        }

        function getDayTitle(dayString) {
            const date = new Date(dayString);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            if (date.toDateString() === today.toDateString()) {
                return 'Today';
            } else if (date.toDateString() === tomorrow.toDateString()) {
                return 'Tomorrow';
            } else {
                return date.toLocaleDateString('en-US', { weekday: 'long' });
            }
        }

        function formatDate(date) {
            return date.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            });
        }

        function formatTime(date) {
            return date.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
        }
    