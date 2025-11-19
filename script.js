// Enhanced Criminal Data with detailed information
const criminalsData = [
    {
        id: 1,
        name: "Adam 'Woken' Hamid",
        alias: "Woken",
        realName: "Adam Hamid",
        age: "19 (20 soon)",
        location: "Canada",
        nationality: "Canadian",
        status: "wanted",
        crimeType: "Extortion",
        tags: ["Extortion", "Pedophile", "Child Exploitation", "LARP", "Scammer"],
        crimes: [
            "Multiple extortion attempts",
            "Child pornography distribution", 
            "Online harassment campaigns",
            "Identity theft operations",
            "Financial fraud schemes"
        ],
        description: "A stereotypical comkid who escalated from cringe content creation to serious criminal activities including extortion and child exploitation. Known for operating multiple aliases across various platforms.",
        email: "hauliced@gmail.com",
        phone: "+1 (604) ***-**16",
        ips: ["212.221.129.129", "154.5.74.196"],
        social: "@hatredtowardseveryone (TikTok), @bebehwoken (Discord)",
        evidence: [
            { name: "Extortion Chat Logs", url: "#" },
            { name: "Financial Records", url: "#" },
            { name: "Social Media Archive", url: "#" },
            { name: "IP Log Analysis", url: "#" }
        ],
        image: "https://i.imgur.com/fE9JMni.png",
        // Enhanced data
        aliases: [
            { name: "Woken", type: "Primary" },
            { name: "Body", type: "Rep/OS" },
            { name: "Temp", type: "Rep/OS" },
            { name: "Slitted", type: "Rep/OS" },
            { name: "Hauliced", type: "Main" },
            { name: "Evil", type: "Rep/OS" },
            { name: "Step", type: "Rep/OS" },
            { name: "Loop", type: "Alternate" },
            { name: "Haunteds", type: "Alternate" },
            { name: "Aeter", type: "Music" },
            { name: "bebehwoken", type: "Discord" },
            { name: "workingonit", type: "Alternate" },
            { name: "ykme4mysiientaim", type: "Alternate" },
            { name: "bulletdbt", type: "Alternate" },
            { name: "realwoken", type: "Alternate" },
            { name: "uhlurk", type: "Alternate" },
            { name: "crywoken", type: "Discord" },
            { name: "blamedblame", type: "Alternate" },
            { name: "hatredtowardseveryone", type: "TikTok" },
            { name: "stopclickin", type: "TikTok" },
            { name: "imyslit", type: "Instagram" },
            { name: "wsu", type: "Alternate" },
            { name: "wokenv", type: "Discord" }
        ],
        groups: [
            "ST (slit town)",
            "646",
            "Incur", 
            "MYB",
            "67",
            "MVK",
            "764",
            "SH",
            "147",
            "1414",
            "333",
            "626",
            "SKP",
            "1378",
            "CVTS"
        ],
        address: "481 Springer Avenue, Burnaby, British Columbia, V5B0B3",
        dob: "01/06/2006",
        zodiac: "Capricorn",
        creditCard: "45*******5076 (Exp: 06/28)",
        credits: [
            { name: "Lace", role: "OSINT Investigation", color: "green" },
            { name: "Surgeon", role: "OSINT Assistance", color: "green" },
            { name: "Paranoid", role: "Helping Hand", color: "yellow" },
            { name: "Tobayas", role: "ASCII Art", color: "primary" },
            { name: "December", role: "Formatting", color: "primary" }
        ]
    },
    {
        id: 2,
        name: "Wei Zhang",
        alias: "DarkShadow",
        realName: "Wei Zhang",
        age: "28",
        location: "China",
        nationality: "Chinese",
        status: "fugitive",
        crimeType: "Espionage",
        tags: ["Espionage", "State Actor", "Corporate"],
        crimes: ["Corporate Espionage", "Data Breaches", "APT Attacks"],
        description: "Suspected state-sponsored actor involved in corporate espionage and advanced persistent threat campaigns targeting international corporations.",
        email: "darkshadow@protonmail.com",
        phone: "+86 138 XXXX XXXX",
        ips: ["203.34.56.78", "112.98.45.231", "61.129.76.54"],
        social: "Unknown",
        evidence: [
            { name: "Corporate Data Leak", url: "#" },
            { name: "Attack Logs", url: "#" },
            { name: "Communication Logs", url: "#" }
        ],
        image: "https://i.imgur.com/8zQ9W3x.png",
        aliases: [
            { name: "DarkShadow", type: "Primary" },
            { name: "ShadowWalker", type: "Alternate" },
            { name: "DigitalGhost", type: "Operational" }
        ],
        groups: [
            "APT41",
            "BlackTech",
            "Emissary Panda"
        ],
        address: "Classified",
        dob: "Unknown",
        zodiac: "Unknown",
        creditCard: "Unknown",
        credits: [
            { name: "CyberSec Team", role: "Threat Analysis", color: "green" },
            { name: "Intel Group", role: "Intelligence", color: "yellow" }
        ]
    },
    {
        id: 3,
        name: "Marcus Johnson",
        alias: "PhantomHacker",
        realName: "Marcus Theodore Johnson",
        age: "25",
        location: "USA",
        nationality: "American",
        status: "captured",
        crimeType: "Fraud",
        tags: ["Fraud", "Scammer", "Financial"],
        crimes: ["Credit Card Fraud", "Social Engineering", "Botnet Operations"],
        description: "Former IT student turned cybercriminal specializing in financial fraud and social engineering attacks.",
        email: "phantom@mail2tor.com",
        phone: "+1 347 XXX XXXX",
        ips: ["72.45.189.234", "98.76.54.321", "192.168.1.150"],
        social: "@phantom_hacker (Discord)",
        evidence: [
            { name: "Arrest Records", url: "#" },
            { name: "Court Documents", url: "#" },
            { name: "Seized Equipment", url: "#" }
        ],
        image: "https://i.imgur.com/9aB7cW1.png",
        aliases: [
            { name: "PhantomHacker", type: "Primary" },
            { name: "TechWizard", type: "Forum" },
            { name: "DigitalBandit", type: "IRC" }
        ],
        groups: [
            "GhostSquad",
            "DigitalMafia"
        ],
        address: "Federal Correctional Institution",
        dob: "03/15/1998",
        zodiac: "Pisces",
        creditCard: "N/A (Incarcerated)",
        credits: [
            { name: "FBI Cyber", role: "Investigation", color: "green" },
            { name: "Local PD", role: "Arrest", color: "yellow" }
        ]
    }
];

// Filter functionality
let currentFilters = {
    tags: [],
    status: ['wanted', 'fugitive', 'captured'],
    location: ['Russia', 'China', 'USA', 'Europe']
};

// Snow Effect
function createSnow() {
    const snowContainer = document.getElementById('snow');
    const snowflakes = 100;
    
    for (let i = 0; i < snowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startPosition}vw`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        snowContainer.appendChild(snowflake);
    }
}

// Loading Screen with sound
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadPercent = document.getElementById('load-percent');
    
    // Play loading sound
    playLoadingSound();
    createSnow();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                }
                // Play system ready sound
                playSystemReadySound();
            }, 500);
        }
        
        if (loadingProgress) {
            loadingProgress.style.width = `${progress}%`;
        }
        if (loadPercent) {
            loadPercent.textContent = `${Math.round(progress)}%`;
        }
    }, 100);
});

// Fixed Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');
let trailElements = [];
const trailCount = 10;

// Create trail elements
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    trailElements.push(trail);
}

document.addEventListener('mousemove', (e) => {
    // Update main cursor with proper centering
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
    
    // Update trail with delay
    trailElements.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.opacity = 1 - (index / trailCount);
            trail.style.transform = `translate(-50%, -50%) scale(${1 - (index / trailCount) * 0.8})`;
        }, index * 30);
    });
});

// Navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Add active class to clicked nav item
        this.classList.add('active');
        
        // Hide all content sections
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active-content');
        });
        
        // Show the selected content section
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active-content');
        
        // Play navigation sound
        playNavSound();
    });
});

// Filter functionality
function initializeFilters() {
    // Set up filter checkboxes
    document.querySelectorAll('.filter-option input').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Set up filter buttons
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    // Set up sort dropdown
    document.getElementById('sort-by').addEventListener('change', handleSortChange);
}

function handleFilterChange(e) {
    const checkbox = e.target;
    const filterType = checkbox.name;
    const value = checkbox.value;
    
    if (checkbox.checked) {
        if (!currentFilters[filterType].includes(value)) {
            currentFilters[filterType].push(value);
        }
    } else {
        currentFilters[filterType] = currentFilters[filterType].filter(item => item !== value);
    }
}

function applyFilters() {
    populateCriminals();
    playClickSound();
}

function resetFilters() {
    // Reset all checkboxes
    document.querySelectorAll('.filter-option input').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset filter object
    currentFilters = {
        tags: [],
        status: ['wanted', 'fugitive', 'captured'],
        location: ['Russia', 'China', 'USA', 'Europe']
    };
    
    populateCriminals();
    playClickSound();
}

function handleSortChange(e) {
    const sortBy = e.target.value;
    sortCriminals(sortBy);
    populateCriminals();
}

function sortCriminals(sortBy) {
    switch(sortBy) {
        case 'name':
            criminalsData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'status':
            criminalsData.sort((a, b) => a.status.localeCompare(b.status));
            break;
        case 'location':
            criminalsData.sort((a, b) => a.location.localeCompare(b.location));
            break;
    }
}

// Populate criminals grid with filtering
function populateCriminals() {
    const shameGrid = document.querySelector('.shame-grid');
    const resultsCount = document.getElementById('results-count');
    if (!shameGrid) return;
    
    // Filter criminals based on current filters
    const filteredCriminals = criminalsData.filter(criminal => {
        const tagsMatch = currentFilters.tags.length === 0 || 
                         currentFilters.tags.some(tag => criminal.tags.includes(tag));
        const statusMatch = currentFilters.status.includes(criminal.status);
        const locationMatch = currentFilters.location.includes(criminal.location);
        
        return tagsMatch && statusMatch && locationMatch;
    });
    
    shameGrid.innerHTML = '';
    
    if (filteredCriminals.length === 0) {
        shameGrid.innerHTML = '<div class="no-results">No criminals found matching your filters.</div>';
        resultsCount.textContent = 'Showing 0 criminals';
        return;
    }
    
    filteredCriminals.forEach(criminal => {
        const criminalCard = document.createElement('div');
        criminalCard.className = 'criminal-card';
        
        // Create tags display
        const tagsHTML = criminal.tags.map(tag => 
            `<span class="crime-tag">${tag}</span>`
        ).join('');
        
        criminalCard.innerHTML = `
            <div class="criminal-pic">
                <img src="${criminal.image}" alt="${criminal.name}">
            </div>
            <div class="criminal-name">${criminal.name}</div>
            <div class="criminal-alias">"${criminal.alias}"</div>
            <div class="criminal-crimes">${criminal.crimes.join(', ')}</div>
            <div class="crime-tags">${tagsHTML}</div>
            <div class="criminal-status status-${criminal.status}">
                ${criminal.status.toUpperCase()}
            </div>
        `;
        criminalCard.setAttribute('data-id', criminal.id);
        shameGrid.appendChild(criminalCard);
    });
    
    resultsCount.textContent = `Showing ${filteredCriminals.length} criminals`;
}

// Enhanced modal population function
function populateCriminalModal(criminal) {
    // Basic info
    document.getElementById('modal-pic').src = criminal.image;
    document.getElementById('modal-name').textContent = criminal.name;
    document.getElementById('modal-alias').textContent = `AKA "${criminal.alias}"`;
    document.getElementById('modal-status').textContent = criminal.status.toUpperCase();
    document.getElementById('modal-status').className = `criminal-status status-${criminal.status}`;
    
    // Description
    document.getElementById('modal-description').textContent = criminal.description || "No description available.";
    
    // Enhanced aliases section
    const aliasesPreview = document.getElementById('aliases-preview');
    const allAliases = document.getElementById('all-aliases');
    
    aliasesPreview.innerHTML = '';
    allAliases.innerHTML = '';
    
    // Show first 5 aliases in preview
    criminal.aliases.slice(0, 5).forEach(alias => {
        const aliasTag = document.createElement('span');
        aliasTag.className = 'alias-tag';
        aliasTag.textContent = alias.name;
        aliasesPreview.appendChild(aliasTag);
    });
    
    // Show all aliases in expandable section
    criminal.aliases.forEach(alias => {
        const aliasItem = document.createElement('div');
        aliasItem.className = 'alias-item';
        aliasItem.innerHTML = `
            <strong>${alias.name}</strong>
            <div class="alias-type">${alias.type}</div>
        `;
        allAliases.appendChild(aliasItem);
    });
    
    // Groups
    const groupsSection = document.getElementById('modal-groups');
    groupsSection.innerHTML = '';
    criminal.groups.forEach(group => {
        const groupTag = document.createElement('span');
        groupTag.className = 'group-tag';
        groupTag.textContent = group;
        groupsSection.appendChild(groupTag);
    });
    
    // Personal information
    document.getElementById('modal-realname').textContent = criminal.realName;
    document.getElementById('modal-dob').textContent = criminal.dob;
    document.getElementById('modal-location').textContent = criminal.location;
    document.getElementById('modal-age').textContent = criminal.age;
    document.getElementById('modal-nationality').textContent = criminal.nationality;
    document.getElementById('modal-address').textContent = criminal.address;
    document.getElementById('modal-phone').textContent = criminal.phone;
    document.getElementById('modal-creditcard').textContent = criminal.creditCard;
    
    // Digital footprint
    document.getElementById('modal-email').textContent = criminal.email;
    document.getElementById('modal-ips').textContent = criminal.ips.join(', ');
    document.getElementById('modal-social').textContent = criminal.social;
    
    // Criminal activity
    document.getElementById('modal-crimes').innerHTML = 
        `<ul>${criminal.crimes.map(crime => `<li>${crime}</li>`).join('')}</ul>`;
    
    // Tags
    const tagsHTML = criminal.tags.map(tag => 
        `<span class="crime-tag">${tag}</span>`
    ).join('');
    document.getElementById('modal-tags').innerHTML = tagsHTML;
    
    // Credits
    const creditsSection = document.getElementById('modal-credits');
    creditsSection.innerHTML = '';
    criminal.credits.forEach(credit => {
        const creditItem = document.createElement('div');
        creditItem.className = `credit-item ${credit.color || ''}`;
        creditItem.innerHTML = `
            <strong>${credit.name}</strong>
            <div>${credit.role}</div>
        `;
        creditsSection.appendChild(creditItem);
    });
    
    // Evidence
    const evidenceLinks = document.getElementById('modal-evidence');
    evidenceLinks.innerHTML = criminal.evidence.map(evidence => 
        `<a href="${evidence.url}" class="evidence-link" target="_blank">${evidence.name}</a>`
    ).join('');
}

// Expand aliases functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('expand-aliases-btn')) {
        const allAliases = document.getElementById('all-aliases');
        const button = e.target;
        
        if (allAliases.style.display === 'none') {
            allAliases.style.display = 'grid';
            button.textContent = 'Hide Aliases';
        } else {
            allAliases.style.display = 'none';
            button.textContent = 'Show All Aliases';
        }
    }
});

// Criminal modal functionality
const criminalModal = document.getElementById('criminal-modal');

document.addEventListener('click', function(e) {
    if (e.target.closest('.criminal-card')) {
        const criminalCard = e.target.closest('.criminal-card');
        const criminalId = parseInt(criminalCard.getAttribute('data-id'));
        const criminal = criminalsData.find(c => c.id === criminalId);
        
        if (criminal && criminalModal) {
            populateCriminalModal(criminal);
            criminalModal.style.display = 'block';
            playModalOpenSound();
        }
    }
});

// Modal close functionality
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            playModalCloseSound();
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            playModalCloseSound();
        }
    });
});

// Disclaimer modal functionality
const disclaimerModal = document.getElementById('disclaimer-modal');
const disclaimerToggle = document.getElementById('disclaimer-toggle');

if (disclaimerToggle && disclaimerModal) {
    disclaimerToggle.addEventListener('click', function() {
        disclaimerModal.style.display = 'block';
        playModalOpenSound();
    });
}

// Spotify music functionality
const musicToggle = document.getElementById('music-toggle');
let musicPlaying = false;

if (musicToggle) {
    musicToggle.addEventListener('click', function() {
        // Since Spotify embed doesn't support direct control like YouTube,
        // we'll toggle the visibility and handle autoplay differently
        const bgMusic = document.getElementById('bg-music');
        
        if (musicPlaying) {
            // Pause by removing the src and re-adding it
            const currentSrc = bgMusic.src;
            bgMusic.src = '';
            setTimeout(() => {
                bgMusic.src = currentSrc;
            }, 100);
            musicToggle.textContent = '🔇';
            musicPlaying = false;
        } else {
            // Play by ensuring the iframe is loaded
            musicToggle.textContent = '🔊';
            musicPlaying = true;
        }
        playClickSound();
    });
}

// Search functionality
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.trim() === '') {
        populateCriminals();
        return;
    }
    
    const filteredCriminals = criminalsData.filter(criminal => 
        criminal.name.toLowerCase().includes(searchTerm) ||
        criminal.alias.toLowerCase().includes(searchTerm) ||
        criminal.crimes.some(crime => crime.toLowerCase().includes(searchTerm)) ||
        criminal.location.toLowerCase().includes(searchTerm) ||
        criminal.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    const shameGrid = document.querySelector('.shame-grid');
    const resultsCount = document.getElementById('results-count');
    
    if (shameGrid) {
        shameGrid.innerHTML = '';
        
        if (filteredCriminals.length === 0) {
            shameGrid.innerHTML = '<div class="no-results">No criminals found matching your search.</div>';
            resultsCount.textContent = 'Showing 0 criminals';
            return;
        }
        
        filteredCriminals.forEach(criminal => {
            const criminalCard = document.createElement('div');
            criminalCard.className = 'criminal-card';
            
            // Create tags display
            const tagsHTML = criminal.tags.map(tag => 
                `<span class="crime-tag">${tag}</span>`
            ).join('');
            
            criminalCard.innerHTML = `
                <div class="criminal-pic">
                    <img src="${criminal.image}" alt="${criminal.name}">
                </div>
                <div class="criminal-name">${criminal.name}</div>
                <div class="criminal-alias">"${criminal.alias}"</div>
                <div class="criminal-crimes">${criminal.crimes.join(', ')}</div>
                <div class="crime-tags">${tagsHTML}</div>
                <div class="criminal-status status-${criminal.status}">
                    ${criminal.status.toUpperCase()}
                </div>
            `;
            criminalCard.setAttribute('data-id', criminal.id);
            shameGrid.appendChild(criminalCard);
        });
        
        resultsCount.textContent = `Showing ${filteredCriminals.length} criminals`;
    }
    
    playSearchSound();
}

// User info detection
function detectUserInfo() {
    const userIP = document.getElementById('user-ip');
    const userAgent = document.getElementById('user-agent');
    const torStatus = document.getElementById('tor-status');
    
    // Get user agent info
    const ua = navigator.userAgent;
    let os = "Unknown OS";
    
    if (ua.indexOf("Win") !== -1) os = "Windows";
    if (ua.indexOf("Mac") !== -1) os = "MacOS";
    if (ua.indexOf("Linux") !== -1) os = "Linux";
    if (ua.indexOf("Android") !== -1) os = "Android";
    if (ua.indexOf("iOS") !== -1) os = "iOS";
    
    if (userAgent) {
        userAgent.textContent = `OS: ${os}`;
    }
    
    // Get IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            if (userIP) {
                userIP.textContent = `IP: ${data.ip}`;
            }
            
            // Simple Tor detection
            const ipParts = data.ip.split('.');
            const firstOctet = parseInt(ipParts[0]);
            
            // Common Tor exit node IP ranges
            const torRanges = [
                [51, 15], [51, 38], [51, 68], [51, 83]
            ];
            
            let isTor = false;
            for (let range of torRanges) {
                if (firstOctet === range[0] && parseInt(ipParts[1]) === range[1]) {
                    isTor = true;
                    break;
                }
            }
            
            if (torStatus) {
                torStatus.textContent = `TOR: ${isTor ? 'DETECTED' : 'NOT DETECTED'}`;
                torStatus.style.color = isTor ? '#44ff44' : '#ff4444';
            }
        })
        .catch(error => {
            if (userIP) userIP.textContent = 'IP: Unknown';
            if (torStatus) torStatus.textContent = 'TOR: Unknown';
        });
}

// Initialize when page loads
window.addEventListener('load', function() {
    // Detect user info
    detectUserInfo();
    
    // Populate criminals
    populateCriminals();
    
    // Initialize filters
    initializeFilters();
});

// SIMPLE SOUND FUNCTIONS - Using HTML5 Audio instead of Web Audio API
function playNavSound() {
    // Simple beep sound using HTML5 Audio
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.1;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playHoverSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.05;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playClickSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playSystemReadySound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playLoadingSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.1;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playModalOpenSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playModalCloseSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Sound play failed'));
}

function playSearchSound() {
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Sound play failed'));
}

// Hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.nav-item, .criminal-card, .page-btn, .redirect-btn, .evidence-link, .music-btn, .disclaimer-btn, #search-btn, .filter-btn, .filter-option, .sort-options select, .expand-aliases-btn')) {
        if (cursor) cursor.classList.add('hover');
        playHoverSound();
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.nav-item, .criminal-card, .page-btn, .redirect-btn, .evidence-link, .music-btn, .disclaimer-btn, #search-btn, .filter-btn, .filter-option, .sort-options select, .expand-aliases-btn')) {
        if (cursor) cursor.classList.remove('hover');
    }
});

// Click effect
document.addEventListener('click', (e) => {
    if (e.target.matches('.nav-item, .criminal-card, .page-btn, .redirect-btn, .evidence-link, .music-btn, .disclaimer-btn, #search-btn, .filter-btn, .filter-option, .sort-options select, .expand-aliases-btn')) {
        if (cursor) {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 100);
        }
        playClickSound();
    }
});

// Add crime type and tags styling
const crimeTypeStyles = `
    .crime-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 15px;
        justify-content: center;
    }
    
    .crime-tag {
        background-color: rgba(255, 255, 68, 0.2);
        color: #ffff44;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: 1px solid #ffff44;
    }
    
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: #cccccc;
        font-size: 1.2rem;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 2px solid #333;
    }
`;

// Add the styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = crimeTypeStyles;
document.head.appendChild(styleSheet);
