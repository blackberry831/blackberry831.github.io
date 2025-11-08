// Loading Screen with sound
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
document.querySelectorAll('.nav-item, input, textarea, select, button, .forum-option, .checkbox-label, .product-item, .staff-member').forEach(item => {
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
        
        // Special handling for databases section
        if (target === 'databases') {
            playAccessDeniedSound();
        }
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
    "sysomos.com", "crimsonhexagon.com", "fusion.net", "datasift.com",
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

// Product modal functionality
const productModal = document.getElementById('product-modal');
const productModalName = document.getElementById('modal-product-name');
const productModalDetails = document.getElementById('modal-product-details');
const productCloseBtn = productModal.querySelector('.modal-close');

// Product data
const productData = {
    facebook: {
        name: "Facebook Database 2021",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">533 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2021-04-03</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">SQL Dump</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$2,500</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>user_id: 123456789
phone: +1-555-0123
email: john.doe@example.com
name: John Doe
location: New York, US
birth_date: 1985-03-15
gender: male
registration_date: 2012-08-22</code></pre>
            </div>
        `
    },
    linkedin: {
        name: "LinkedIn Database 2021",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">700 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2021-06-22</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">CSV Export</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$1,800</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>email: sarah.connor@techcorp.com
full_name: Sarah Connor
phone: +1-555-0456
company: TechCorp Inc
position: Senior Developer
industry: Information Technology
location: San Francisco, CA</code></pre>
            </div>
        `
    },
    twitter: {
        name: "Twitter Database 2022",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">5.4 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2022-01-01</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">JSON Export</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$3,200</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>{
  "user_id": "789012345",
  "username": "hacker_pro",
  "email": "pro.hacker@securemail.com",
  "phone": "+44-7911-123456",
  "followers": 15432,
  "account_created": "2015-11-30",
  "last_tweet": "2022-12-15",
  "verified": false
}</code></pre>
            </div>
        `
    },
    instagram: {
        name: "Instagram Scraped Data 2023",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">487 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2023-03-15</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">MongoDB Dump</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$2,100</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>{
  "_id": "507f1f77bcf86cd799439011",
  "username": "travel_lover_23",
  "full_name": "Emma Wilson",
  "email": "emma.w@example.org",
  "phone": "+49-157-98765432",
  "followers": 1247,
  "posts": 89,
  "bio": "Digital nomad | Photography enthusiast",
  "business_account": false,
  "last_post": "2023-12-01"
}</code></pre>
            </div>
        `
    },
    uber: {
        name: "Uber Employee Data 2022",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">77,000</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2022-09-15</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">Excel Sheets</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$4,500</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>employee_id: UB-789456
full_name: Michael Rodriguez
email: m.rodriguez@uber.com
position: Senior Software Engineer
department: Engineering
salary_band: L5
location: San Francisco, CA
hire_date: 2019-08-12
internal_id: 654321987</code></pre>
            </div>
        `
    },
    rockyou: {
        name: "RockYou 2021 Password List",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">8.4 billion</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2021-12-25</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">Text File</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$800</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>password123
admin
123456
qwerty
password
letmein
welcome
monkey
abc123
111111
1234567
iloveyou
admin123</code></pre>
            </div>
        `
    },
    telegram: {
        name: "Telegram User Data 2023",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">42 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2023-07-30</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">SQL + Phone Numbers</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$3,800</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>user_id: 9876543210
phone: +1-555-0789
username: crypto_whale
first_name: Alex
last_name: Thompson
dc_id: 4
language: en
premium: true
last_seen: 2023-11-20 14:30:00</code></pre>
            </div>
        `
    },
    voter: {
        name: "US Voter Registration Data",
        details: `
            <div class="detail-row">
                <span class="detail-label">Records:</span>
                <span class="detail-value">191 million</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date of Breach:</span>
                <span class="detail-value">2015-12-28</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Format:</span>
                <span class="detail-value">Multiple CSV Files</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">$1,200</span>
            </div>
            <div class="sample-data">
                <h4>Sample Data:</h4>
                <pre><code>first_name: Jennifer
last_name: Martinez
address: 1234 Oak Street
city: Miami
state: FL
zip_code: 33101
dob: 1988-07-22
voter_id: FL987654321
party: Democratic
registration_date: 2012-10-15</code></pre>
            </div>
        `
    }
};

// Add click event to product items
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        if (productData[productId]) {
            productModalName.textContent = productData[productId].name;
            productModalDetails.innerHTML = productData[productId].details;
            productModal.style.display = 'block';
            playModalOpenSound();
        }
    });
});

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
    "Boootted": "Moderator known for expertise in DDoS
