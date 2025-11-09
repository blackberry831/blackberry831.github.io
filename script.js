// Loading Screen with sound - FIXED
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadPercent = document.getElementById('load-percent');
    
    // Play loading sound
    playLoadingSound();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                // Play system ready sound
                playSystemReadySound();
            }, 500);
        }
        
        loadingProgress.style.width = `${progress}%`;
        loadPercent.textContent = `${Math.round(progress)}%`;
    }, 150);
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
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
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
document.querySelectorAll('.nav-item, input, textarea, select, button, .staff-member, .contact-link').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        playHoverSound();
    });
    
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Click effect
document.addEventListener('click', () => {
    cursor.style.transform = 'scale(0.8)';
    playClickSound();
    setTimeout(() => {
        cursor.style.transform = 'scale(1)';
    }, 100);
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

// Matrix background animation - only on left half
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full window size but only use left half
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the matrix effect
const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const charArray = chars.split("");
const fontSize = 14;
const columns = canvas.width / fontSize / 2; // Only left half

// Array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}

function drawMatrix() {
    // Semi-transparent black background for trail effect
    ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height); // Only left half
    
    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw the character - only on left half
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

// Terminal functionality
const terminalInput = document.querySelector('.cmd-input');
const terminalOutput = document.querySelector('.terminal-output');

// Command history
let commandHistory = [];
let historyIndex = -1;

// Available commands
const commands = {
    help: () => `Available commands: help, whoami, about, clear, date, echo, contact, mission`,
    whoami: () => `asha_operative`,
    about: () => `We are Asha - Advanced Security Hunters Agency. Former RaidForums/BreachForums staff operating in the digital shadows.`,
    clear: () => {
        terminalOutput.innerHTML = '';
        return '';
    },
    date: () => new Date().toString(),
    echo: (args) => args.join(' '),
    contact: () => `Secure contact: bluerasperry@onionmail.com`,
    mission: () => `Our mission: Eliminate BreachForums clones and impersonators. Maintain digital order.`
};

if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            terminalInput.value = '';
            
            if (command) {
                // Add to history
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                
                // Process command
                processCommand(command);
            }
            
            // Add new input line
            const newLine = document.createElement('div');
            newLine.className = 'terminal-line';
            newLine.innerHTML = `<span class="prompt">user@blackberry831:~$</span> `;
            terminalOutput.appendChild(newLine);
            
            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            // Navigate command history
            e.preventDefault();
            if (commandHistory.length > 0) {
                historyIndex = Math.max(historyIndex - 1, 0);
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            // Navigate command history
            e.preventDefault();
            if (commandHistory.length > 0) {
                historyIndex = Math.min(historyIndex + 1, commandHistory.length);
                if (historyIndex === commandHistory.length) {
                    terminalInput.value = '';
                } else {
                    terminalInput.value = commandHistory[historyIndex];
                }
            }
        }
    });
}

function processCommand(command) {
    const [cmd, ...args] = command.split(' ');
    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-line';
    
    if (commands[cmd]) {
        outputLine.textContent = commands[cmd](args);
    } else {
        outputLine.textContent = `Command not found: ${cmd}. Type 'help' for available commands.`;
        outputLine.style.color = '#ff0000';
    }
    
    terminalOutput.appendChild(outputLine);
    playTerminalSound();
}

// Staff modal functionality
const staffModal = document.getElementById('staff-modal');
const staffModalName = document.getElementById('modal-staff-name');
const staffModalDescription = document.getElementById('modal-staff-description');
const staffCloseBtn = staffModal.querySelector('.modal-close');

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
        if (staffData[staffName]) {
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
        this.closest('.modal').style.display = 'none';
        playModalCloseSound();
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
const disclaimerCloseBtn = disclaimerModal.querySelector('.modal-close');

disclaimerToggle.addEventListener('click', function() {
    disclaimerModal.style.display = 'block';
    playModalOpenSound();
});

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
    
    userAgent.textContent = `OS: ${os}`;
    
    // Get IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            userIP.textContent = `IP: ${data.ip}`;
            
            // Simple Tor detection (check for common Tor exit node IP ranges)
            // This is a basic check and not 100% accurate
            const ipParts = data.ip.split('.');
            const firstOctet = parseInt(ipParts[0]);
            
            // Common Tor exit node IP ranges (this is not exhaustive)
            const torRanges = [
                [51, 15], [51, 38], [51, 68], [51, 83], [51, 105], [51, 159], [51, 161], 
                [51, 195], [51, 222], [62, 102], [62, 210], [77, 81], [77, 247], [78, 142], 
                [79, 124], [80, 67], [82, 221], [85, 159], [85, 248], [86, 109], [87, 118], 
                [89, 163], [89, 234], [91, 109], [91, 121], [91, 203], [92, 222], [93, 95], 
                [94, 16], [94, 140], [94, 142], [94, 198], [94, 242], [95, 128], [95, 142], 
                [95, 154], [95, 211], [95, 215], [95, 216], [103, 10], [103, 28], [103, 35], 
                [104, 131], [104, 156], [104, 167], [104, 194], [104, 218], [104, 236], [104, 244], 
                [107, 141], [107, 150], [107, 155], [107, 170], [107, 181], [107, 189], [107, 191], 
                [109, 70], [109, 201], [109, 236], [128, 31], [128, 199], [129, 159], [130, 149], 
                [131, 188], [132, 248], [136, 243], [137, 74], [138, 68], [138, 197], [139, 162], 
                [139, 178], [141, 239], [144, 76], [144, 217], [146, 0], [146, 115], [146, 185], 
                [147, 135], [148, 251], [149, 56], [149, 202], [149, 248], [151, 80], [151, 236], 
                [152, 26], [154, 35], [154, 127], [155, 4], [155, 94], [157, 161], [158, 69], 
                [159, 65], [159, 89], [159, 203], [162, 216], [162, 220], [162, 221], [162, 243], 
                [163, 172], [164, 132], [164, 154], [165, 227], [165, 231], [167, 114], [167, 160], 
                [167, 249], [168, 1], [171, 25], [172, 81], [172, 98], [172, 104], [172, 105], 
                [176, 10], [176, 58], [176, 126], [176, 223], [178, 16], [178, 17], [178, 20], 
                [178, 62], [178, 79], [178, 128], [178, 209], [178, 238], [178, 254], [179, 43], 
                [179, 48], [179, 60], [180, 149], [185, 100], [185, 107], [185, 117], [185, 129], 
                [185, 220], [188, 68], [188, 118], [188, 126], [188, 166], [188, 213], [188, 214], 
                [188, 226], [192, 42], [192, 81], [192, 160], [192, 184], [193, 107], [193, 110], 
                [194, 109], [194, 147], [195, 176], [195, 191], [198, 50], [198, 96], [198, 98], 
                [199, 249], [199, 254], [200, 122], [204, 8], [204, 11], [204, 13], [204, 17], 
                [204, 85], [204, 194], [205, 168], [205, 185], [206, 248], [207, 244], [208, 113], 
                [209, 141], [209, 222], [212, 16], [212, 21], [212, 47], [212, 80], [212, 83], 
                [213, 95], [213, 108], [213, 139], [213, 152], [213, 186], [213, 252], [216, 218], 
                [217, 12], [217, 115], [217, 146], [217, 182]
            ];
            
            let isTor = false;
            for (let range of torRanges) {
                if (firstOctet === range[0] && parseInt(ipParts[1]) === range[1]) {
                    isTor = true;
                    break;
                }
            }
            
            torStatus.textContent = `TOR: ${isTor ? 'DETECTED' : 'NOT DETECTED'}`;
            torStatus.style.color = isTor ? '#00ff00' : '#ff0000';
        })
        .catch(error => {
            userIP.textContent = 'IP: Unknown';
            torStatus.textContent = 'TOR: Unknown';
        });
}

// Initialize when page loads
window.addEventListener('load', function() {
    // Detect user info
    detectUserInfo();
});

// Sound generation functions
function playNavSound() {
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
}

function playHoverSound() {
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
}

function playClickSound() {
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
}

function playTerminalSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
}

function playSystemReadySound() {
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
}

function playLoadingSound() {
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
}

function playModalOpenSound() {
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
}

function playModalCloseSound() {
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
}
