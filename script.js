// Database Collection
const databases = [
    {
        id: 1,
        name: "breached.sh Database",
        type: "Forum Database",
        icon: "🗄️",
        date: "2024",
        size: "~2.5GB",
        description: "Complete breached.sh forum database including user data, private messages, administrative logs, and CDN access credentials.",
        features: [
            "User database with emails & passwords",
            "Mod CP IPs, Admin CP IPs, Member IPs",
            "Private messages and communications",
            "Access to 2-4 RDP machines",
            "aaPanel (CDN & mybb Files) credentials",
            "Shoutbox messages archive",
            "Official section databases",
            "Admin CP credentials and PIN",
            "Telegram & Session messages with staff",
            "Premium plugins and theme files",
            "Moderator & Admin action logs"
        ],
        tags: ["Forum", "Complete", "Premium"]
    },
    {
        id: 2,
        name: "breach-forums.live Database",
        type: "Forum Database",
        icon: "💾",
        date: "2024",
        size: "~1.8GB",
        description: "Comprehensive breach-forums.live database with complete user information, forum content, and administrative data.",
        features: [
            "Complete user database",
            "Usernames & passwords",
            "Forum activity and post history",
            "Private messages & threads",
            "IP addresses (User, Mod CP, Admin CP)",
            "User and administrator emails",
            "BreachForums theme files"
        ],
        tags: ["Forum", "Complete", "Verified"]
    },
    {
        id: 3,
        name: "breachforums.cx Database",
        type: "Forum Database",
        icon: "📊",
        date: "2024",
        size: "~1.2GB",
        description: "breachforums.cx forum database containing user credentials and activity logs.",
        features: [
            "User data collection",
            "Email addresses and passwords",
            "Username database",
            "IP address logs",
            "User registration data"
        ],
        tags: ["Forum", "Standard"]
    },
    {
        id: 4,
        name: "breachforums.info Database",
        type: "Forum Database",
        icon: "🔐",
        date: "2024",
        size: "~900MB",
        description: "breachforums.info database with user information and moderator communications. Note: Contains unverified data.",
        features: [
            "User data collection",
            "Email and password credentials",
            "Moderator control panel IPs",
            "Staff and member private messages",
            "Member IP addresses",
            "Moderator action logs"
        ],
        tags: ["Forum", "Unverified", "Caution"]
    },
    {
        id: 5,
        name: "breachforums.vc Database",
        type: "Forum Database",
        icon: "⚠️",
        date: "Claimed 2024",
        size: "Unknown",
        description: "Alleged breachforums.vc database. WARNING: No evidence provided that this database exists or that the seller has access to it. Purchase at extreme risk. UNVERIFIED.",
        features: [
            "Alleged user data (UNVERIFIED)",
            "Claimed email addresses and passwords",
            "Supposed user registration dates",
            "Alleged private messages",
            "Claimed IP addresses",
            "Claimed Mod CP logged IPs",
            "CDN Access (UNVERIFIED)",
            "Database schema (UNVERIFIED)"
        ],
        tags: ["Forum", "UNVERIFIED", "HIGH RISK", "NO PROOF"]
    },
    {
        id: 6,
        name: "Custom Database Request",
        type: "Custom",
        icon: "🎯",
        date: "On Request",
        size: "Varies",
        description: "Contact for custom database acquisition requests, OSINT services, or specific data requirements.",
        features: [
            "Custom database searches",
            "OSINT investigations",
            "Data breach verification",
            "Specific forum targeting",
            "Private inquiries handled"
        ],
        tags: ["Custom", "OSINT", "Request"]
    }
];

// Global variables
let filteredDatabases = [...databases];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();
    populateDatabases();
    initializeSearch();
    initializeModal();
});

// Loading screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                }
            }, 300);
        }
        
        if (loadingProgress) {
            loadingProgress.style.width = `${progress}%`;
        }
    }, 100);
}

// Populate database grid
function populateDatabases() {
    const grid = document.getElementById('database-grid');
    const totalCount = document.getElementById('total-count');
    const noResults = document.getElementById('no-results');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredDatabases.length === 0) {
        if (noResults) noResults.style.display = 'block';
        if (totalCount) totalCount.textContent = '0';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    if (totalCount) totalCount.textContent = filteredDatabases.length;
    
    filteredDatabases.forEach(db => {
        const card = createDatabaseCard(db);
        grid.appendChild(card);
    });
}

// Create database card
function createDatabaseCard(db) {
    const card = document.createElement('div');
    card.className = 'database-card';
    card.setAttribute('data-id', db.id);
    
    const tagsHTML = db.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    card.innerHTML = `
        <div class="database-header">
            <div class="database-icon">${db.icon}</div>
            <div class="database-info">
                <div class="database-name">${db.name}</div>
                <div class="database-type">${db.type}</div>
            </div>
        </div>
        <div class="database-description">${db.description.substring(0, 120)}...</div>
        <div class="database-meta">
            <span class="meta-tag">📅 ${db.date}</span>
            <span class="meta-tag">💿 ${db.size}</span>
        </div>
        <div class="database-tags">${tagsHTML}</div>
    `;
    
    card.addEventListener('click', () => openModal(db));
    
    return card;
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Real-time search
        searchInput.addEventListener('input', performSearch);
    }
}

// Perform search - automatically filters by name
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredDatabases = [...databases];
    } else {
        filteredDatabases = databases.filter(db => 
            db.name.toLowerCase().includes(searchTerm)
        );
    }
    
    populateDatabases();
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('database-modal');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Open modal with database details
function openModal(db) {
    const modal = document.getElementById('database-modal');
    if (!modal) return;
    
    // Populate modal content
    document.getElementById('modal-title').textContent = db.name;
    document.getElementById('modal-type').textContent = db.type;
    document.getElementById('modal-date').textContent = db.date;
    document.getElementById('modal-size').textContent = db.size;
    document.getElementById('modal-description').textContent = db.description;
    
    // Populate features list
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    db.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Populate tags
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = '';
    db.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('database-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Auto-play YouTube music on page load (after user interaction)
window.addEventListener('load', function() {
    const bgMusic = document.getElementById('bg-music');
    
    // Try to play music after first user interaction
    const playMusic = () => {
        if (bgMusic) {
            bgMusic.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&loop=1&playlist=jfKfPfyJRdk&controls=0&mute=0";
        }
        // Remove listeners after first interaction
        document.removeEventListener('click', playMusic);
        document.removeEventListener('keydown', playMusic);
        document.removeEventListener('scroll', playMusic);
    };
    
    // Add listeners for user interaction
    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('keydown', playMusic, { once: true });
    document.addEventListener('scroll', playMusic, { once: true });
});
