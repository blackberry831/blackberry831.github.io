// Database Collection with images and samples
const databases = [
    {
        id: 1,
        name: "breached.sh Database",
        type: "Forum Database",
        icon: "🗄️",
        date: "2024",
        size: "~2.5GB",
        price: "For Sale",
        image: "https://i.imgur.com/fE9JMni.png",
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
        sample: `username,email,password_hash,ip_address,registration_date
user123,user@example.com,$2y$10$abcd...,192.168.1.1,2024-01-15
admin_panel,admin@breach.sh,$2y$10$efgh...,10.0.0.5,2023-12-01
moderator1,mod@breach.sh,$2y$10$ijkl...,172.16.0.10,2024-02-20
[... 50,000+ more entries ...]

Total Records: 52,847 users
Admin Accounts: 12
Moderator Accounts: 47
Premium Members: 3,421`,
        tags: ["Official", "Verified"],
        infected: false
    },
    {
        id: 2,
        name: "breach-forums.live Database",
        type: "Forum Database",
        icon: "💾",
        date: "2024",
        size: "~1.8GB",
        price: "For Sale",
        image: "https://i.imgur.com/8zQ9W3x.png",
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
        sample: `id,username,email,ip_last_login,post_count,join_date
1001,hacker_pro,hacker@mail.com,203.0.113.45,1523,2023-11-12
1002,data_miner,miner@proton.me,198.51.100.22,892,2024-01-08
1003,breach_lord,lord@temp.mail,192.0.2.146,2341,2023-10-05
[... 38,000+ more entries ...]

Total Users: 38,492
Total Posts: 1,284,592
Total Private Messages: 524,183`,
        tags: ["Official", "Verified"],
        infected: false
    },
    {
        id: 3,
        name: "breachforums.cx Database",
        type: "Forum Database",
        icon: "📊",
        date: "2024",
        size: "~1.2GB",
        price: "For Sale",
        image: "https://i.imgur.com/9aB7cW1.png",
        description: "breachforums.cx forum database containing user credentials and activity logs.",
        features: [
            "User data collection",
            "Email addresses and passwords",
            "Username database",
            "IP address logs",
            "User registration data"
        ],
        sample: `user_id,username,email_hash,last_ip,account_status
5001,cyber_ghost,a1b2c3d4...,45.33.32.156,active
5002,dark_web,e5f6g7h8...,104.21.58.192,suspended
5003,anon_user,i9j0k1l2...,172.67.140.52,active
[... 25,000+ more entries ...]

Total Accounts: 25,814
Active Users: 18,293
Suspended: 4,521
Banned: 3,000`,
        tags: ["Official", "Unverified"],
        infected: false
    },
    {
        id: 4,
        name: "breachforums.info Database",
        type: "Forum Database",
        icon: "🔐",
        date: "2024",
        size: "~900MB",
        price: "For Sale",
        image: "https://i.imgur.com/P6UZEQC.jpeg",
        description: "breachforums.info database with user information and moderator communications. Note: Contains unverified data.",
        features: [
            "User data collection",
            "Email and password credentials",
            "Moderator control panel IPs",
            "Staff and member private messages",
            "Member IP addresses",
            "Moderator action logs"
        ],
        sample: `WARNING: UNVERIFIED DATA - AUTHENTICITY NOT CONFIRMED

user,email,mod_ip,last_login
user_a,emaila@test.com,NULL,2024-03-15
moderator_b,modb@forum.info,10.0.1.50,2024-03-20
admin_c,adminc@forum.info,192.168.5.10,2024-03-22
[... data integrity uncertain ...]

Note: This database has not been verified and may contain
fabricated or incomplete information. Purchase at your own risk.`,
        tags: ["Unverified", "Infected"],
        infected: true
    },
    {
        id: 5,
        name: "breachforums.vc Database",
        type: "Forum Database",
        icon: "⚠️",
        date: "Claimed 2024",
        size: "Unknown",
        price: "For Sale",
        image: "https://i.imgur.com/KBZPL8b.jpeg",
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
        sample: `⚠️ NO SAMPLE AVAILABLE ⚠️

CRITICAL WARNING:
- No proof of database existence
- No verification of breach occurrence  
- Seller has provided ZERO evidence
- No sample data available
- Claims regarding .st and .hn databases also unverified

RECOMMENDATION: DO NOT PURCHASE
This database is highly likely to be fraudulent.
No legitimate seller would refuse to provide any evidence.`,
        tags: ["Unverified", "No Proof"],
        infected: true
    },
    {
        id: 6,
        name: "Custom Database Request",
        type: "Custom",
        icon: "🎯",
        date: "On Request",
        size: "Varies",
        price: "Free",
        image: "https://i.imgur.com/fE9JMni.png",
        description: "Contact for custom database acquisition requests, OSINT services, or specific data requirements.",
        features: [
            "Custom database searches",
            "OSINT investigations",
            "Data breach verification",
            "Specific forum targeting",
            "Private inquiries handled"
        ],
        sample: `CONTACT FOR CUSTOM REQUESTS

Services Available:
- Custom database acquisition
- OSINT investigations
- Target-specific data collection
- Breach verification services
- Data analysis and reporting

Contact: ashabreached@protonmail.com

PGP Key available on Operatives page
Response time: Usually within 24-48 hours
`,
        tags: ["Custom", "OSINT"],
        infected: false
    }
];

// Global variables
let filteredDatabases = [...databases];
let currentFilter = 'all';
let downloadTimers = {};

// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!audioContext || audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'click':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'hover':
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
        case 'modal':
            oscillator.frequency.value = 400;
            oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'expand':
            oscillator.frequency.value = 300;
            oscillator.frequency.exponentialRampToValueAtTime(700, audioContext.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
            break;
        case 'download':
            oscillator.frequency.value = 1000;
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'warning':
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
    }
}

// Tag icons mapping
const tagIcons = {
    "Official": "🏛️",
    "Verified": "✅",
    "Unverified": "❓",
    "Infected": "🦠",
    "Custom": "🎯",
    "OSINT": "🔍",
    "For Sale": "💰",
    "Free": "🆓",
    "No Proof": "🚫"
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();
    populateDatabases();
    initializeSearch();
    initializeModal();
    initializeFilters();
    initializeScrollBehavior();
    initializeDisclaimerModal();
    initializeEducationModal();
    addSoundEffects();
});

// Loading screen - Improved with actual loading
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    if (!loadingScreen || !loadingProgress) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1 + Math.random() * 3; // Simulate actual loading
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            loadingProgress.style.width = `${progress}%`;
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 300);
        }
        
        loadingProgress.style.width = `${progress}%`;
    }, 20);
    
    // Failsafe: force hide after 5 seconds
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 5000);
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
    
    const priceTag = db.price === 'Free' ? 
        '<span class="tag free"><span class="tag-icon">💰</span> Free</span>' : 
        '<span class="tag for-sale"><span class="tag-icon">🤑</span> For Sale</span>';
    
    const tagsHTML = db.tags.map(tag => {
        const icon = tagIcons[tag] || '🏷️';
        const className = tag.toLowerCase().replace(/\s+/g, '-');
        return `<span class="tag ${className}"><span class="tag-icon">${icon}</span> ${tag}</span>`;
    }).join('');
    
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
            ${priceTag}
        </div>
        <div class="database-tags">${tagsHTML}</div>
    `;
    
    card.addEventListener('click', (e) => {
        playSound('click');
        openModal(db);
    });
    
    card.addEventListener('mouseenter', () => {
        playSound('hover');
    });
    
    return card;
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            playSound('click');
            performSearch();
        });
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                playSound('click');
                performSearch();
            }
        });
        
        // Real-time search
        searchInput.addEventListener('input', performSearch);
    }
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            playSound('click');
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            performSearch();
        });
    });
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    filteredDatabases = databases.filter(db => {
        const matchesSearch = searchTerm === '' || 
            db.name.toLowerCase().includes(searchTerm) ||
            db.description.toLowerCase().includes(searchTerm) ||
            db.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesFilter = currentFilter === 'all' || 
            (currentFilter === 'free' && db.price === 'Free') ||
            (currentFilter === 'paid' && db.price === 'For Sale');
        
        return matchesSearch && matchesFilter;
    });
    
    populateDatabases();
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('database-modal');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const educationModal = document.getElementById('education-modal');
    const closeBtns = document.querySelectorAll('.modal-close');
    const overlays = document.querySelectorAll('.modal-overlay');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            playSound('click');
            closeModal();
        });
    });
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function() {
            playSound('click');
            closeModal();
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            playSound('click');
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
            if (disclaimerModal && disclaimerModal.classList.contains('active')) {
                disclaimerModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (educationModal && educationModal.classList.contains('active')) {
                educationModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Open modal with database details
function openModal(db) {
    const modal = document.getElementById('database-modal');
    if (!modal) return;
    
    playSound('modal');
    
    // Clear existing download timer for this database
    if (downloadTimers[db.id]) {
        clearInterval(downloadTimers[db.id].interval);
        delete downloadTimers[db.id];
    }
    
    // Populate modal content
    const modalImageContainer = document.querySelector('.modal-image-container');
    if (modalImageContainer) {
        modalImageContainer.innerHTML = `<img src="${db.image}" alt="${db.name}" onerror="this.src='https://i.imgur.com/fE9JMni.png'">`;
    }
    
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
    
    // Create sample content with expandable sections
    const sampleSection = document.querySelector('.sample-section');
    if (sampleSection) {
        sampleSection.innerHTML = `
            <div class="expandable-section">
                <button class="expand-btn" data-target="sample-content">
                    <span>📋 Sample Data Preview</span>
                    <span class="expand-icon">▶</span>
                </button>
                <div class="expandable-content" id="sample-content">
                    <div class="sample-preview blurred" id="sample-preview" onclick="toggleSampleBlur()">
                        <pre id="modal-sample">${db.sample.substring(0, 300)}...</pre>
                    </div>
                    <button class="unblur-btn" id="unblur-btn" onclick="toggleSampleBlur()">
                        Click to ${db.sample.includes('WARNING') ? 'view warning' : 'unblur sample'}
                    </button>
                </div>
            </div>
        `;
    }
    
    // Create download section
    const downloadSection = document.querySelector('.download-section');
    if (downloadSection) {
        const isInfected = db.infected;
        const downloadBtnHTML = isInfected ? 
            `<button class="download-btn warning" onclick="startDownloadTimer(${db.id}, true)" id="download-btn-${db.id}">
                <span class="warning-icon">⚠️</span> Download Infected File (10s Cooldown)
            </button>` :
            `<button class="download-btn" onclick="startDownloadTimer(${db.id}, false)" id="download-btn-${db.id}">
                ⬇️ Download Database
            </button>`;
        
        downloadSection.innerHTML = `
            <div class="download-header">
                <h3>🔽 Database Download</h3>
            </div>
            ${downloadBtnHTML}
            <div class="download-timer" id="timer-${db.id}" style="display: none;">
                Download available in: <span id="countdown-${db.id}">10</span> seconds
            </div>
            ${isInfected ? `
            <div class="download-warning">
                <span class="warning-icon">⚠️</span>
                <strong>WARNING:</strong> This file may contain malware or infected content. 
                Download at your own risk. Always use in a secure environment.
            </div>` : ''}
        `;
    }
    
    // Populate tags with icons
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = '';
    
    // Add price tag
    const priceTag = document.createElement('span');
    priceTag.className = db.price === 'Free' ? 'tag free' : 'tag for-sale';
    priceTag.innerHTML = `<span class="tag-icon">${db.price === 'Free' ? '💰' : '🤑'}</span> ${db.price}`;
    modalTags.appendChild(priceTag);
    
    // Add other tags with icons
    db.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        const icon = tagIcons[tag] || '🏷️';
        const className = tag.toLowerCase().replace(/\s+/g, '-');
        tagElement.className = `tag ${className}`;
        tagElement.innerHTML = `<span class="tag-icon">${icon}</span> ${tag}`;
        modalTags.appendChild(tagElement);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Toggle sample blur
function toggleSampleBlur() {
    playSound('expand');
    const preview = document.getElementById('sample-preview');
    const btn = document.getElementById('unblur-btn');
    const samplePre = document.getElementById('modal-sample');
    
    if (preview.classList.contains('blurred')) {
        preview.classList.remove('blurred');
        btn.textContent = 'Click to blur sample';
        
        // Load full sample if not already loaded
        const currentDb = filteredDatabases.find(db => 
            db.sample.substring(0, 300) + '...' === samplePre.textContent
        );
        if (currentDb) {
            samplePre.textContent = currentDb.sample;
        }
    } else {
        preview.classList.add('blurred');
        btn.textContent = 'Click to unblur sample';
    }
}

// Download timer function
function startDownloadTimer(dbId, isInfected) {
    const btn = document.getElementById(`download-btn-${dbId}`);
    const timerDisplay = document.getElementById(`timer-${dbId}`);
    const countdownDisplay = document.getElementById(`countdown-${dbId}`);
    
    if (!btn || !timerDisplay || !countdownDisplay) return;
    
    playSound(isInfected ? 'warning' : 'download');
    
    let seconds = isInfected ? 10 : 3;
    btn.disabled = true;
    timerDisplay.style.display = 'block';
    countdownDisplay.textContent = seconds;
    
    if (downloadTimers[dbId]) {
        clearInterval(downloadTimers[dbId].interval);
    }
    
    downloadTimers[dbId] = {
        interval: setInterval(() => {
            seconds--;
            countdownDisplay.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(downloadTimers[dbId].interval);
                btn.disabled = false;
                timerDisplay.style.display = 'none';
                btn.textContent = isInfected ? 
                    '⚠️ Download Infected File (Ready)' : 
                    '⬇️ Download Database (Ready)';
                playSound('click');
                
                // Change button to trigger actual download
                btn.onclick = () => initiateDownload(dbId, isInfected);
                delete downloadTimers[dbId];
            }
        }, 1000)
    };
}

// Initiate download
function initiateDownload(dbId, isInfected) {
    playSound('download');
    
    const db = databases.find(d => d.id === dbId);
    if (!db) return;
    
    // Create a fake download link (in real implementation, this would link to actual file)
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${db.name.replace(/\s+/g, '_')}.zip`;
    
    // Create download content
    const content = `
Database: ${db.name}
Type: ${db.type}
Date: ${db.date}
Size: ${db.size}
Price: ${db.price}

Description:
${db.description}

Features:
${db.features.map(f => `• ${f}`).join('\n')}

Sample Data:
${db.sample}

${isInfected ? '\n⚠️ WARNING: This file may contain malware or infected content. Use with caution!' : ''}

Downloaded from Asha's Database Index
For research and educational purposes only.
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset button
    const btn = document.getElementById(`download-btn-${dbId}`);
    if (btn) {
        btn.textContent = isInfected ? 
            '⚠️ Download Infected File (10s Cooldown)' : 
            '⬇️ Download Database';
        btn.onclick = () => startDownloadTimer(dbId, isInfected);
    }
    
    // Show success message
    alert(`Download started for: ${db.name}\n\nRemember: This is for research and educational purposes only!`);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('database-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Scroll behavior for header and footer
function initializeScrollBehavior() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            if (header) header.classList.add('hidden');
            if (footer) footer.classList.add('hidden');
        } else {
            // Scrolling up
            if (header) header.classList.remove('hidden');
            if (footer) footer.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
}

// Disclaimer modal
function initializeDisclaimerModal() {
    const disclaimerBtn = document.getElementById('disclaimer-btn');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    
    if (disclaimerBtn && disclaimerModal) {
        disclaimerBtn.addEventListener('click', function() {
            playSound('modal');
            disclaimerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        const closeBtn = disclaimerModal.querySelector('.modal-close');
        const overlay = disclaimerModal.querySelector('.modal-overlay');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                playSound('click');
                disclaimerModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        if (overlay) {
            overlay.addEventListener('click', function() {
                playSound('click');
                disclaimerModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    }
}

// Education modal
function initializeEducationModal() {
    const educationBtn = document.getElementById('education-btn');
    const educationModal = document.getElementById('education-modal');
    const educationAcceptBtn = document.getElementById('education-accept-btn');
    
    if (!educationBtn) {
        // Create education button if it doesn't exist
        const footer = document.getElementById('footer');
        if (footer) {
            const newEducationBtn = document.createElement('button');
            newEducationBtn.id = 'education-btn';
            newEducationBtn.className = 'disclaimer-btn';
            newEducationBtn.textContent = 'Research & Educational Purposes Only';
            newEducationBtn.style.marginLeft = '1rem';
            
            const footerContent = footer.querySelector('.footer-content');
            if (footerContent) {
                footerContent.appendChild(newEducationBtn);
            }
            
            // Add event listener to the newly created button
            newEducationBtn.addEventListener('click', function() {
                playSound('modal');
                educationModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    } else {
        educationBtn.addEventListener('click', function() {
            playSound('modal');
            educationModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (educationModal) {
        const closeBtn = educationModal.querySelector('.modal-close');
        const overlay = educationModal.querySelector('.modal-overlay');
        
        // Close function
        const closeEducationModal = function() {
            playSound('click');
            educationModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            localStorage.setItem('educationAccepted', 'true');
        };
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeEducationModal);
        }
        
        // Overlay click
        if (overlay) {
            overlay.addEventListener('click', closeEducationModal);
        }
        
        // Accept button
        if (educationAcceptBtn) {
            educationAcceptBtn.addEventListener('click', closeEducationModal);
        }
        
        // Show education modal on first visit
        if (!localStorage.getItem('educationAccepted')) {
            setTimeout(() => {
                educationModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 1000);
        }
        
        // Close on ESC key (handled in main modal initialization)
    }
}

// Add sound effects to interactive elements
function addSoundEffects() {
    // Hover sounds
    document.addEventListener('mouseover', function(e) {
        if (e.target.matches('.database-card, .nav-link, .filter-btn, button:not(.expand-btn), a, .tag')) {
            playSound('hover');
        }
    });
    
    // Click sounds
    document.addEventListener('click', function(e) {
        if (e.target.matches('.nav-link, .filter-btn, button:not(.expand-btn), a')) {
            playSound('click');
        }
    });
    
    // Expand sounds
    document.addEventListener('click', function(e) {
        if (e.target.closest('.expand-btn')) {
            playSound('expand');
        }
    });
}
