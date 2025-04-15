function firstScroll() {
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
        window.removeEventListener('scroll', firstScroll);
    }
}

window.addEventListener('scroll', firstScroll);

const targets = document.querySelectorAll('.js-fade');
const targetSteps = document.querySelectorAll('.js-fade-step');

let options = {
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0,
};

let stepOptions = {
    root: null,
    rootMargin: "0px 0px",
    threshold: 1,
};

let observer = new IntersectionObserver(callback, options);

targets.forEach((target) => {
    observer.observe(target);
});

function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mask");
        }
    });
}

let stepObserver = new IntersectionObserver(stepCallback, stepOptions);

targetSteps.forEach((target) => {
    stepObserver.observe(target);
});

function stepCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mask");
        }
    });
}

document.querySelectorAll('.js-gotop').forEach($ => {
    $.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    })
})