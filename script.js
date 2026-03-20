// 🏆 SET FINAL DATE (CHANGE THIS)
const finalDate = new Date("March 21, 2026 16:00:00").getTime();

// ELEMENTS
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = document.getElementById("countdown");
const finalMessage = document.getElementById("finalMessage");

const boomSound = document.getElementById("boomSound");

// ⏳ COUNTDOWN FUNCTION
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = finalDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        startFinale();
        return;
    }

    // TIME CALCULATION
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // UPDATE UI
    daysEl.innerText = format(days);
    hoursEl.innerText = format(hours);
    minutesEl.innerText = format(minutes);
    secondsEl.innerText = format(seconds);

    // 🔥 LAST 10 SECONDS DRAMA
    if (distance < 10000) {
        secondsEl.style.color = "red";
        secondsEl.style.transform = "scale(1.3)";
        secondsEl.style.textShadow = "0 0 20px red";
    }
}

// FORMAT (00)
function format(num) {
    return num < 10 ? "0" + num : num;
}

// 💥 FINAL CINEMATIC
function startFinale() {

    // HIDE COUNTDOWN
    countdown.style.display = "none";

    // BODY EXPLOSION EFFECT
    document.body.classList.add("explode");

    // PLAY SOUND
    boomSound.play();

    // SHOW FINAL TEXT
    finalMessage.classList.remove("hidden");
    finalMessage.classList.add("show");

    // FLASH EFFECT
    flashScreen();

    // PARTICLES BURST
    createParticles();

    // CONTINUOUS ENERGY ANIMATION
    setInterval(() => {
        randomGlow();
    }, 300);
}

// ⚡ FLASH SCREEN
function flashScreen() {
    let flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "white";
    flash.style.opacity = "0.8";
    flash.style.zIndex = "999";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 200);
}

// 🎆 PARTICLES BURST
function createParticles() {
    for (let i = 0; i < 80; i++) {
        let particle = document.createElement("div");

        particle.style.position = "fixed";
        particle.style.width = "6px";
        particle.style.height = "6px";
        particle.style.background = getRandomColor();
        particle.style.top = "50%";
        particle.style.left = "50%";
        particle.style.borderRadius = "50%";
        particle.style.zIndex = "999";

        document.body.appendChild(particle);

        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 500;

        let x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;

        particle.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

// 🎨 RANDOM COLORS
function getRandomColor() {
    const colors = ["#ff3c00", "#ffcc00", "#00d9ff", "#ff0066", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 🔥 RANDOM GLOW (POST FINAL EFFECT)
function randomGlow() {
    const text = document.querySelector(".final-text");

    const scale = 1 + Math.random() * 0.2;
    const glow = Math.random() * 50;

    text.style.transform = `scale(${scale})`;
    text.style.textShadow = `0 0 ${glow}px gold, 0 0 ${glow * 2}px orange`;
}