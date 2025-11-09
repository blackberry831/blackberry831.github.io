// Loading Screen with sound - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadPercent = document.getElementById('load-percent');
    
    // Play loading sound
    playLoadingSound();
    
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

// Custom Cursor
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
    // Update main cursor
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
            trail.style.transform = `scale(${1 - (index / trailCount) * 0.8})`;
        }, index * 30);
    });
});

// Hover effects for interactive elements
document.querySelectorAll('.nav-item, .staff-member, .contact-link, .site-item, .page-btn, .redirect-btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hover');
        playHoverSound();
    });
    
    item.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hover');
    });
});

// Click effect
document.addEventListener('click', () => {
    if (cursor) {
        cursor.style.transform = 'scale(0.8)';
        setTimeout(() => {
            cursor.style.transform = 'scale(1)';
        }, 100);
    }
    playClickSound();
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

// Matrix background animation - now full page
const canvas = document.getElementById('matrix');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters for the matrix effect
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize; // Full width now

    // Array of drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    function drawMatrix() {
        // Semi-transparent black background for trail effect
        ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Full width
        
        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Draw the character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset drop to top when it reaches bottom with random delay
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move the drop down
            drops[i]++;
        }
    }

    // Resize canvas when window is resized
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Animation loop for matrix
    setInterval(drawMatrix, 35);
}

// Takedowns functionality
const takedownsData = [
    { name: "breachforums.st", date: "2023-01-15", method: "Server Takedown", details: "Took down impersonation site posing as original BreachForums. Server located in Bulgaria." },
    { name: "breached.is", date: "2023-02-22", method: "Domain Seizure", details: "Coordinated with registrar to seize domain. Site was hosting stolen databases." },
    { name: "raidforums-reborn.com", date: "2023-03-08", method: "Legal Action", details: "Filed DMCA takedown and worked with hosting provider to remove content." },
    { name: "leakbase.io", date: "2023-04-12", method: "Server Takedown", details: "Identified and reported malicious activity to hosting provider in Netherlands." },
    { name: "databreaches.live", date: "2023-05-19", method: "Domain Seizure", details: "Worked with ICANN to seize domain after identifying illegal activities." },
    { name: "hackersparadise.net", date: "2023-06-03", method: "Legal Action", details: "Coordinated with international law enforcement to take down operations." },
    { name: "darkleaks.org", date: "2023-07-11", method: "Server Takedown", details: "Identified server location in Russia and worked with authorities." },
    { name: "cyberunderground.co", date: "2023-08-25", method: "Domain Seizure", details: "Seized domain after identifying multiple illegal activities." },
    { name: "blackmarketonline", date: "2023-09-14", method: "Server Takedown", details: "Took down marketplace selling stolen credentials and tools." },
    { name: "exploitworld.net", date: "2023-10-05", method: "Legal Action", details: "Filed multiple legal complaints leading to complete shutdown." },
    { name: "malware-distro.com", date: "2023-11-18", method: "Server Takedown", details: "Identified and reported malware distribution network." },
    { name: "phishing-kit.store", date: "2023-12-22", method: "Domain Seizure", details: "Seized domain selling phishing kits and stolen data." },
    { name: "cardershaven.io", date: "2024-01-09", method: "Server Takedown", details: "Took down carding forum operating from Eastern Europe." },
    { name: "cryptostealer.net", date: "2024-02-14", method: "Legal Action", details: "Worked with cryptocurrency exchanges to identify and stop operations." },
    { name: "botnet-control.pw", date: "2024-03-27", method: "Server Takedown", details: "Identified and dismantled botnet command and control server." },
    { name: "ransomware-help.com", date: "2024-04-03", method: "Domain Seizure", details: "Seized domain posing as ransomware help but actually distributing malware." },
    { name: "fake-antivirus.pro", date: "2024-05-11", method: "Server Takedown", details: "Took down fake antivirus distribution network." },
    { name: "social-engineer.co", date: "2024-06-28", method: "Legal Action", details: "Filed complaints against social engineering service." },
    { name: "doxing-service.net", date: "2024-07-15", method: "Domain Seizure", details: "Seized domain offering illegal doxing services." },
    { name: "password-cracker.io", date: "2024-08-09", method: "Server Takedown", details: "Took down service offering illegal password cracking." },
    { name: "email-harvester.pro", date: "2024-09-22", method: "Legal Action", details: "Filed legal complaints leading to service termination." },
    { name: "ip-grabber.xyz", date: "2024-10-17", method: "Domain Seizure", details: "Seized domain offering IP grabbing services." },
    { name: "discord-token-stealer", date: "2024-11-05", method: "Server Takedown", details: "Took down Discord token stealing service." },
    { name: "minecraft-hack.club", date: "2024-12-12", method: "Legal Action", details: "Filed DMCA and worked with Mojang to take down." },
    { name: "fortnite-cheats.pro", date: "2025-01-08", method: "Server Takedown", details: "Took down Fortnite cheating service." },
    { name: "valorant-hacks.io", date: "2025-02-19", method: "Domain Seizure", details: "Seized domain offering Valorant cheating software." },
    { name: "aimbot-distro.com", date: "2025-03-14", method: "Legal Action", details: "Worked with game developers to take down aimbot distribution." },
    { name: "game-cracks.net", date: "2025-04-21", method: "Server Takedown", details: "Took down game cracking and piracy site." },
    { name: "software-pirate.org", date: "2025-05-30", method: "Domain Seizure", details: "Seized domain distributing pirated software." },
    { name: "movie-leaks.co", date: "2025-06-11", method: "Legal Action", details: "Filed multiple copyright infringement complaints." }
];

let currentPage = 1;
const itemsPerPage = 15;

function populateTakedowns() {
    const takedownsList = document.querySelector('.takedowns-list');
    const pageInfo = document.getElementById('page-info');
    
    if (!takedownsList) return;
    
    // Clear existing content
    takedownsList.innerHTML = '';
    
    // Calculate start and end indices
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, takedownsData.length);
    
    // Populate current page
    for (let i = startIndex; i < endIndex; i++) {
        const site = takedownsData[i];
        const siteItem = document.createElement('div');
        siteItem.className = 'site-item';
        siteItem.textContent = `${site.name} - ${site.date}`;
        siteItem.setAttribute('data-index', i);
        takedownsList.appendChild(siteItem);
    }
    
    // Update page info
    if (pageInfo) {
        const totalPages = Math.ceil(takedownsData.length / itemsPerPage);
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    }
    
    // Update button states
    updatePaginationButtons();
}

function updatePaginationButtons() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const totalPages = Math.ceil(takedownsData.length / itemsPerPage);
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

// Pagination event listeners
document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        populateTakedowns();
        playNavSound();
    }
});

document.getElementById('next-page')?.addEventListener('click', () => {
    const totalPages = Math.ceil(takedownsData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        populateTakedowns();
        playNavSound();
    }
});

// Takedown modal functionality
const takedownModal = document.getElementById('takedown-modal');
const takedownModalName = document.getElementById('modal-takedown-name');
const takedownModalDetails = document.getElementById('modal-takedown-details');

// Add click event to site items
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('site-item')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        const site = takedownsData[index];
        
        if (site && takedownModal && takedownModalName && takedownModalDetails) {
            takedownModalName.textContent = site.name;
            takedownModalDetails.innerHTML = `
                <div class="takedown-detail">
                    <strong>Date Takedown:</strong> ${site.date}
                </div>
                <div class="takedown-detail">
                    <strong>Method:</strong> ${site.method}
                </div>
                <div class="takedown-detail">
                    <strong>Details:</strong> ${site.details}
                </div>
            `;
            takedownModal.style.display = 'block';
            playModalOpenSound();
        }
    }
});

// Staff modal functionality
const staffModal = document.getElementById('staff-modal');
const staffModalName = document.getElementById('modal-staff-name');
const staffModalDescription = document.getElementById('modal-staff-description');

// Staff data
const staffData = {
    "Baphomet": "Founder and lead administrator of multiple underground forums. Known for expertise in operational security and database management.",
    "ShinyHunters": "Prominent hacking group responsible for multiple high-profile data breaches. Known for selling and leaking databases.",
    "Pompompurin": "Founder of BreachForums. Known for creating one of the largest data breach communities after the takedown of RaidForums.",
    "N/A": "Anonymous administrator who maintains operational security by not disclosing any personal information.",
    "Hollow": "Senior moderator known for enforcing forum rules and maintaining community standards across multiple platforms.",
    "Manitora": "Technical administrator specializing in forum infrastructure and security measures.",
    "Loki": "Moderator known for expertise in social engineering and community management.",
    "888": "Moderator with background in cryptocurrency and financial security.",
    "Tanaka": "International moderator with connections to Asian hacking communities.",
    "Paw": "Technical moderator specializing in exploit development and vulnerability research.",
    "Dedale": "Community moderator focused on user verification and anti-law enforcement measures.",
    "Moderator": "Generic moderator account used by multiple staff members for operational security.",
    "Pine": "Moderator with expertise in OSINT and open source intelligence gathering.",
    "Koko": "Community manager known for organizing forum events and user engagement.",
    "Omnipotent": "Lead administrator of RaidForums with extensive experience in underground communities.",
    "Jaw": "Technical administrator responsible for RaidForums infrastructure and security.",
    "Moot": "Community administrator with background in anonymous imageboards and forums.",
    "Sem": "Moderator specializing in data breach verification and validation.",
    "Burpingjimmy_Bot": "Automated moderation bot with custom rules for content filtering.",
    "Thu": "International moderator with connections to European hacking communities.",
    "Boootted": "Moderator known for expertise in DDoS protection and mitigation.",
    "Pacino": "Community moderator with background in social engineering and psychology.",
    "Asset": "Technical moderator specializing in malware analysis and reverse engineering.",
    "Noxy": "Moderator with expertise in cryptocurrency transactions and blockchain analysis.",
    "Unspoken": "Anonymous moderator who maintains complete operational security.",
    "September": "Community moderator known for organizing hacking competitions and challenges.",
    "Raidflacs": "Moderator with specialization in media sharing and content distribution.",
    "666": "Technical moderator with expertise in exploit development and zero-day vulnerabilities."
};

// Add click event to staff members
document.querySelectorAll('.staff-member').forEach(item => {
    item.addEventListener('click', function() {
        const staffName = this.getAttribute('data-name');
        if (staffData[staffName] && staffModal && staffModalName && staffModalDescription) {
            staffModalName.textContent = staffName;
            staffModalDescription.textContent = staffData[staffName];
            staffModal.style.display = 'block';
            playModalOpenSound();
        }
    });
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
                [51, 15], [51, 38], [51, 68], [51, 83], [51, 105], [51, 159]
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
                torStatus.style.color = isTor ? '#00ff00' : '#ff0000';
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
    
    // Populate takedowns
    populateTakedowns();
});

// Sound generation functions
function playNavSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.05);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playSystemReadySound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playLoadingSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playModalOpenSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playModalCloseSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}
