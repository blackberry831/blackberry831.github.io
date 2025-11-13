// Rain Effect
function createRain() {
    const rainContainer = document.getElementById('rain');
    const raindrops = 150;
    
    for (let i = 0; i < raindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        
        // Random properties
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 2 + 1;
        const animationDelay = Math.random() * 5;
        const height = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.3;
        
        raindrop.style.left = `${left}vw`;
        raindrop.style.animationDuration = `${animationDuration}s`;
        raindrop.style.animationDelay = `${animationDelay}s`;
        raindrop.style.height = `${height}px`;
        raindrop.style.opacity = opacity;
        
        rainContainer.appendChild(raindrop);
    }
}

// Loading Screen for Profiles
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadPercent = document.getElementById('load-percent');
    
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
        if (loadPercent) {
            loadPercent.textContent = `${Math.round(progress)}%`;
        }
    }, 80);
    
    createRain();
    playProfileLoadingSound();
});

// Custom Cursor for Profiles
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');
let trailElements = [];
const trailCount = 8;

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
        }, index * 25);
    });
});

// Database Banner Functionality
document.querySelectorAll('.db-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hover');
        playProfileHoverSound();
    });
    
    button.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hover');
    });
    
    button.addEventListener('click', function() {
        const dbType = this.getAttribute('data-db');
        const banner = document.getElementById(`${dbType}-banner`);
        if (banner) {
            banner.classList.add('active');
            playProfileModalOpenSound();
        }
    });
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hover');
        playProfileHoverSound();
    });
    
    link.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hover');
    });
});

// Close banner functionality
document.querySelectorAll('.db-banner-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const banner = this.closest('.db-banner');
        if (banner) {
            banner.classList.remove('active');
            playProfileModalCloseSound();
        }
    });
});

// Close banner when clicking outside content
document.querySelectorAll('.db-banner').forEach(banner => {
    banner.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            playProfileModalCloseSound();
        }
    });
});

// Back button hover effects
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hover');
        playProfileHoverSound();
    });
    
    btn.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hover');
    });
    
    btn.addEventListener('click', () => {
        playProfileClickSound();
    });
});

// Music functionality
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', function() {
        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
            musicPlaying = false;
        } else {
            bgMusic.play().catch(e => {
                console.log('Autoplay prevented:', e);
                musicToggle.textContent = '▶️';
            });
            musicToggle.textContent = '🔊';
            musicPlaying = true;
        }
        playProfileClickSound();
    });
}

// Profile-specific sound generation functions
function playProfileLoadingSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 1);
        
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

function playProfileHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);
        
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

function playProfileClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.1);
        
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

function playProfileModalOpenSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
        
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

function playProfileModalCloseSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
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

// Hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.db-button, .social-link, .back-btn, .music-btn')) {
        if (cursor) cursor.classList.add('hover');
        playProfileHoverSound();
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.db-button, .social-link, .back-btn, .music-btn')) {
        if (cursor) cursor.classList.remove('hover');
    }
});

// Click effect
document.addEventListener('click', (e) => {
    if (e.target.matches('.db-button, .social-link, .back-btn, .music-btn')) {
        if (cursor) {
            cursor.style.transform = 'scale(0.8)';
            setTimeout(() => {
                cursor.style.transform = 'scale(1)';
            }, 100);
        }
        playProfileClickSound();
    }
});
