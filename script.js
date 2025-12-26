// Fecha objetivo: 29 de abril a las 00:00
const targetDate = new Date("2025-04-29T00:00:00");

// Elementos del DOM
const lockedScreen = document.getElementById("locked-screen");
const unlockedScreen = document.getElementById("unlocked-screen");

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

// Función del contador
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    // Si llega la fecha, desbloquear
    if (diff <= 0) {
        lockedScreen.classList.add("hidden");
        unlockedScreen.classList.remove("hidden");
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    d.textContent = days;
    h.textContent = hours;
    m.textContent = minutes;
    s.textContent = seconds;
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
