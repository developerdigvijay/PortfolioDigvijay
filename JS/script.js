const particlePool = [];
const maxParticles = 50;
let lastTime = 0;

function createParticle() {
    if (particlePool.length >= maxParticles) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(particle);
    particlePool.push(particle);

    particle.addEventListener('animationend', () => {
        particle.remove();
        const index = particlePool.indexOf(particle);
        if (index > -1) particlePool.splice(index, 1);
    });
}

function animateParticles(currentTime) {
    if (currentTime - lastTime > 100) { // ~10fps for particles
        createParticle();
        lastTime = currentTime;
    }
    requestAnimationFrame(animateParticles);
}

requestAnimationFrame(animateParticles);
// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
// Observe all major sections
const sections = document.querySelectorAll(`
    .introduction-container,
    .worked-with,
    .browse-my-work,
    .card-container,
    .footer
`);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll restoration
history.scrollRestoration = 'manual';
