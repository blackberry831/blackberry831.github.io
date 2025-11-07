// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadPercent = document.getElementById('load-percent');
    
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
document.querySelectorAll('.nav-item, input, textarea, select, button, .forum-option, .checkbox-label').forEach(item => {
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

// Matrix background animation
const canvas = document.getElementById('matrix');
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

// Forum data - 200+ sites
const forums = [
    "nulled.to", "cracked.to", "cracked.sh", "breachforums.st", "breachforums.vc",
    "breachforums.it", "breachforums.com", "raidforums.com", "xss.is", "blackhatworld.com",
    "hackforums.net", "evilzone.org", "0x00sec.org", "reddit.com/r/netsec", "reddit.com/r/blackhat",
    "mpgh.net", "sinister.ly", "cracking.org", "cracking.com", "antichat.ru",
    "exploit.in", "forums.mozillazine.org", "wilderssecurity.com", "ghostlyhacks.com", "cardenial.com",
    "kernelmode.info", "unknowncheats.me", "guidedhacking.com", "reversing.io", "reversing.life",
    "reversing.ws", "reversing.zone", "reversing.club", "reversing.team", "reversing.xyz",
    "reversing.net", "reversing.org", "reversing.com", "reversing.info", "reversing.dev",
    "reversing.pro", "reversing.tech", "reversing.host", "reversing.site", "reversing.space",
    "reversing.work", "reversing.services", "reversing.solutions", "reversing.consulting", "reversing.expert",
    "hackthebox.com", "tryhackme.com", "vulnhub.com", "cybrary.it", "securitytube.net",
    "offensive-security.com", "sans.org", "owasp.org", "packetstormsecurity.com", "exploit-db.com",
    "securityfocus.com", "seclists.org", "full-disclosure.com", "bugtraq.org", "seebug.org",
    "zerodayinitiative.com", "hackerone.com", "bugcrowd.com", "openbugbounty.org", "vulnerability-lab.com",
    "security-database.com", "securityweek.com", "threatpost.com", "darkreading.com", "scmagazine.com",
    "infosecurity-magazine.com", "helpnetsecurity.com", "securityaffairs.co", "thehackernews.com", "bleepingcomputer.com",
    "krebsonsecurity.com", "grahamcluley.com", "schneier.com", "troyhunt.com", "haveibeenpwned.com",
    "dehashed.com", "leakcheck.io", "snusbase.com", "breachdirectory.org", "weleakinfo.com",
    "leakedsource.com", "leakpeek.com", "leak-lookup.com", "breachalarm.com", "spycloud.com",
    "enigma.group", "intelx.io", "osint.sh", "osintframework.com", "maltego.com",
    "recon-ng.com", "theharvester.com", "shodan.io", "censys.io", "zoomeye.org",
    "fofa.so", "binaryedge.io", "greynoise.io", "pulsedive.com", "riskiq.com",
    "securitytrails.com", "dnsdumpster.com", "hunter.io", "clearbit.com", "pipl.com",
    "thatsthem.com", "truepeoplesearch.com", "fastpeoplesearch.com", "411.com", "whitepages.com",
    "spokeo.com", "beenverified.com", "instantcheckmate.com", "intelius.com", "peoplefinders.com",
    "truthfinder.com", "ussearch.com", "zabasearch.com", "peekyou.com", "yasni.com",
    "webmii.com", "pimeyes.com", "facecheck.id", "berify.com", "social-searcher.com",
    "socialmention.com", "brand24.com", "mention.com", "talkwalker.com", "brandwatch.com",
    "sysomos.com", "crimsonhexagon.com", "netbase.com", "fusion.net", "datasift.com",
    "gnip.com", "radian6.com", "simplymeasured.com", "iconosquare.com", "socialbakers.com",
    "quintly.com", "crowdtangle.com", "buzzsumo.com", "awario.com", "agorapulse.com",
    "sendible.com", "socialoomph.com", "buffer.com", "hootsuite.com", "sproutsocial.com",
    "zoho.com", "hubspot.com", "marketingcloud.com", "exacttarget.com", "pardot.com",
    "act-on.com", "marketo.com", "eloqua.com", "infusionsoft.com", "getresponse.com",
    "mailchimp.com", "constantcontact.com", "campaignmonitor.com", "sendinblue.com", "convertkit.com",
    "activecampaign.com", "drip.com", "klaviyo.com", "customer.io", "iterable.com",
    "braze.com", "airship.com", "onesignal.com", "pushwoosh.com", "pushcrew.com",
    "pushnami.com", "aimtell.com", "webpush.com", "roost.com", "pushalert.co",
    "pushassist.com", "pushnotifications.com", "notifyvisitors.com", "push-ad.com", "pushground.com",
    "propellerads.com", "revcontent.com", "outbrain.com", "taboola.com", "content.ad",
    "mgid.com", "adblade.com", "gravity.com", "zemanta.com", "stackadapt.com",
    "triplelift.com", "teads.tv", "sharethrough.com", "native.ai", "powerlinks.com",
    "nativo.com", "polar.me", "disqus.com", "livefyre.com", "intensedebate.com",
    "commentbox.io", "graphcomment.com", "hypercomments.com", "remarkbox.com", "muut.com",
    "cocomment.com", "spot.im", "viafoura.com", "solidopinion.com", "echo.js",
    "isso-comments.com", "remark42.com", "utteranc.es", "giscus.com", "talkyard.io",
    "cactus.chat", "commento.io", "just-comments.com", "staticman.net", "discourse.org",
    "flarum.org", "nodebb.org", "vanillaforums.com", "simplemachines.org", "phpbb.com",
    "vbulletin.com", "xenforo.com", "invisioncommunity.com", "mybb.com", "fluxbb.org",
    "esotalk.org", "bbpress.org", "buddyboss.com", "ipb.com", "woltlab.com",
    "ubbcentral.com", "ubbthreads.com", "yabb.com", "yetanotherforum.net", "communityserver.org",
    "telligent.com", "jivesoftware.com", "lithium.com", "khoros.com", "insided.com",
    "higherlogic.com", "hivebrite.com", "ning.com", "groupserver.org", "grouply.com",
    "crowded.com", "mightybell.com", "circle.so", "mighty networks.com", "group.app",
    "tribe.so", "bettermode.com", "thoughtful.ai", "communities.com", "zapnito.com"
];

// Function to populate forums
function populateForums() {
    const forumsContainer = document.querySelector('.forums-container');
    if (!forumsContainer) return;
    
    // Clear existing content
    forumsContainer.innerHTML = '';
    
    // Create three columns
    const columns = 3;
    const forumsPerColumn = Math.ceil(forums.length / columns);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'forums-column';
        
        const startIndex = i * forumsPerColumn;
        const endIndex = Math.min(startIndex + forumsPerColumn, forums.length);
        
        for (let j = startIndex; j < endIndex; j++) {
            const forum = forums[j];
            const forumOption = document.createElement('div');
            forumOption.className = 'forum-option';
            forumOption.innerHTML = `
                <input type="checkbox" name="forums" value="${forum}" id="forum_${j}">
                <label for="forum_${j}">${forum}</label>
            `;
            column.appendChild(forumOption);
        }
        
        forumsContainer.appendChild(column);
    }
}

// Form functionality
const customMessageToggle = document.getElementById('custom_message_toggle');
const customMessageField = document.getElementById('custom_message');

if (customMessageToggle && customMessageField) {
    customMessageToggle.addEventListener('change', function() {
        if (this.checked) {
            customMessageField.style.display = 'block';
        } else {
            customMessageField.style.display = 'none';
            customMessageField.value = '';
        }
    });
}

// Form submission
const recruitmentForm = document.getElementById('recruitment-form');
if (recruitmentForm) {
    recruitmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const nickname = this.elements.nickname.value;
        if (!nickname) {
            alert('Please provide your nickname/alias.');
            return;
        }
        
        // Show submission message with email
        alert('Application compiled. Please send the completed form to: bluerasperry@onionmail.com\n\nWe will contact you through secure channels if interested.');
        
        // Reset form
        this.reset();
        if (customMessageField) {
            customMessageField.style.display = 'none';
        }
        
        // Play submission sound
        playSubmitSound();
    });
}

// Initialize when page loads
window.addEventListener('load', function() {
    populateForums();
    
    // Add typing animation to connection status
    const statusLines = document.querySelectorAll('.status-line');
    statusLines.forEach((line, index) => {
        line.style.animationDelay = `${0.5 + (index * 0.5)}s`;
    });
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

function playSubmitSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
}
