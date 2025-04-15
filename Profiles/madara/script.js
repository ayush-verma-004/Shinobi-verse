let cursor = document.querySelector('#cursor');
let main = document.querySelector(".main");

// CHANGED: Added touch device detection to disable cursor on mobile
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    main.addEventListener('mousemove', (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.7,
            ease: "back.out(4)",
            rotate: 360,
        });
    });
} else {
    cursor.style.display = 'none'; // Hide cursor on touch devices
}