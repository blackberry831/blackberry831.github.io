// Loading Screen with sound
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
document.querySelectorAll('.nav-item, .staff-member, .contact-link, .site-item, .page-btn, .redirect-btn, .social-link, .back-btn').forEach(item => {
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

// Matrix background animation - full page
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
    const columns = canvas.width / fontSize;

    // Array of drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    function drawMatrix() {
        // Semi-transparent black background for trail effect
        ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
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

// Takedowns functionality - UPDATED WITH MORE DATA
const takedownsData = [
    { 
        name: "breached.sh", 
        date: "2023-05-15", 
        method: "Server Takedown", 
        details: "breached.is new domain. Compromised through unpatched vulnerabilities in the MyBB forum software.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "breached.is", 
        date: "2023-04-22", 
        method: "Server Takedown", 
        details: "Unpaid DDoS Guard services led to service suspension. Clone site operated by unknown threat actors.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "breachforums-forums.live", 
        date: "2023-03-10", 
        method: "Server Takedown", 
        details: "Clone operated by inexperienced administrator with poor operational security. Infrastructure seized through legal channels.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "breachforums.cx", 
        date: "2023-02-28", 
        method: "Server Seized", 
        details: "Domain seized by international law enforcement agencies as part of Operation Secure Shield.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "breachforums.hn", 
        date: "2023-01-15", 
        method: "Server Takedown", 
        details: "Confirmed FBI honeypot operation designed to gather intelligence on cybercriminal activities.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "raidforums.re", 
        date: "2022-12-05", 
        method: "Domain Seizure", 
        details: "Resurrection attempt of original RaidForums platform. Takedown coordinated with hosting provider.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "leakbase.pw", 
        date: "2022-11-18", 
        method: "Infrastructure Compromise", 
        details: "Competitor forum taken down through exploitation of administrative panel vulnerabilities.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "darkforums.st", 
        date: "2022-10-30", 
        method: "Server Takedown", 
        details: "Illegal marketplace for stolen data and hacking tools. Server located and reported to authorities.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "hackforums.net", 
        date: "2022-09-12", 
        method: "Partial Takedown", 
        details: "Specific sections promoting illegal activities were reported and removed by administrators.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "nulled.to", 
        date: "2022-08-25", 
        method: "Service Disruption", 
        details: "Distributed denial of service attack combined with hosting provider complaints.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "cracked.io", 
        date: "2022-07-14", 
        method: "Legal Action", 
        details: "Software piracy forum taken down through copyright infringement claims and legal pressure.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "sinfulsite.com", 
        date: "2022-06-08", 
        method: "Server Takedown", 
        details: "Carding and financial fraud forum. Infrastructure identified and reported to financial institutions.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "omniforum.org", 
        date: "2022-05-19", 
        method: "Domain Suspension", 
        details: "Multi-purpose cybercrime forum. Domain registrar compliance with law enforcement requests.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "blackhatworld.com", 
        date: "2022-04-03", 
        method: "Content Removal", 
        details: "Specific illegal sections removed after coordinated reporting campaign.",
        leakedLink: "#",
        newsLink: "#"
    },
    { 
        name: "exploit.in", 
        date: "2022-03-22", 
        method: "Server Takedown", 
        details: "Russian-language hacking forum. Server located in Netherlands and taken offline.",
        leakedLink: "#",
        newsLink: "#"
    }
];

let currentPage = 1;
const itemsPerPage = 12;

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
        siteItem.innerHTML = `
            <div class="site-domain">${site.name}</div>
            <div class="site-date">${site.date}</div>
            <div class="site-method">${site.method}</div>
        `;
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
const leakedLink = document.getElementById('leaked-link');
const newsLink = document.getElementById('news-link');

// Add click event to site items
document.addEventListener('click', function(e) {
    if (e.target.closest('.site-item')) {
        const siteItem = e.target.closest('.site-item');
        const index = parseInt(siteItem.getAttribute('data-index'));
        const site = takedownsData[index];
        
        if (site && takedownModal && takedownModalName && takedownModalDetails) {
            takedownModalName.textContent = site.name;
            takedownModalDetails.innerHTML = `
                <div class="takedown-detail">
                    <strong>Date:</strong> ${site.date}
                </div>
                <div class="takedown-detail">
                    <strong>Method:</strong> ${site.method}
                </div>
                <div class="takedown-detail">
                    <strong>Details:</strong> ${site.details}
                </div>
            `;
            
            // Set link URLs
            if (leakedLink) leakedLink.href = site.leakedLink;
            if (newsLink) newsLink.href = site.newsLink;
            
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
    "Baphomet": "Security researcher and system administrator.",
    "ShinyHunters": "ShinyHunters is a black-hat criminal hacker and extortion group that is believed to have formed in 2020 and is said to have been involved in a massively significant amount of data breaches. The group often extorts the company they've hacked, if the company does not pay the ransom the stolen information is often sold or leaked on the dark web.",
    "Pompompurin": "Network security specialist.",
    "Hollow": "System security analyst.",
    "Loki": "Security protocol developer."
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
