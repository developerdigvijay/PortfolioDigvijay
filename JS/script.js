const particlePool = [];
const maxParticles = 50;
let lastTime = 0;

const menuToggle = document.querySelector('.site-nav__toggle');
const navLinks = document.querySelector('.site-nav__links');

function setNavigationOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    navLinks.classList.toggle('is-open', isOpen);
}

const navigationAnchors = document.querySelectorAll('.site-nav a[href^="#"]');

menuToggle.addEventListener('click', () => {
    setNavigationOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navigationAnchors.forEach(link => {
    link.addEventListener('click', () => {
        const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setNavigationOpen(false);
        setCurrentNavigation(link.hash.slice(1));
        if (wasOpen && window.innerWidth < 768) {
            window.requestAnimationFrame(() => menuToggle.focus());
        }
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setNavigationOpen(false);
        menuToggle.focus();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menuToggle.getAttribute('aria-expanded') === 'true') {
        setNavigationOpen(false);
    }
});

const navigationSections = document.querySelectorAll('#home, #services, #projects, #contact');

function setCurrentNavigation(sectionId) {
    navigationAnchors.forEach(link => {
        if (link.hash === `#${sectionId}`) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function updateCurrentNavigation() {
    let activeSectionId = navigationSections[0].id;
    const activeLine = window.innerHeight * 0.3;

    navigationSections.forEach(section => {
        if (section.getBoundingClientRect().top <= activeLine) {
            activeSectionId = section.id;
        }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        activeSectionId = navigationSections[navigationSections.length - 1].id;
    }

    setCurrentNavigation(activeSectionId);
}

window.addEventListener('scroll', updateCurrentNavigation, { passive: true });
window.addEventListener('resize', updateCurrentNavigation);
updateCurrentNavigation();

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
