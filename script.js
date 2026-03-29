const year = document.querySelector('#year');
const navbar = document.querySelector('#navbar');
const typingText = document.querySelector('#typing-text');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navbar) {
  const setNavStyle = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  setNavStyle();
  window.addEventListener('scroll', setNavStyle, { passive: true });
}

if (typingText) {
  const grades = ['Class 7', 'Class 8', 'Class 9', 'Class 10'];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % grades.length;
    typingText.textContent = grades[index];
  }, 1400);
}

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.animated-bg', {
    backgroundPosition: '100% 100%',
    duration: 20,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });

  gsap.from('.hero-copy .reveal', {
    y: 38,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
  });

  gsap.from('.hero-card', {
    x: 40,
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
    ease: 'power3.out',
  });

  gsap.utils.toArray('.section, .confidence-banner, .site-footer').forEach((section) => {
    const targets = section.querySelectorAll('.reveal, .glass-card, .module-card, .footer-grid > div');
    if (!targets.length) return;

    gsap.from(targets, {
      y: 34,
      opacity: 0,
      scale: 0.98,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        once: true,
      },
    });
  });

  gsap.to('.confidence-banner', {
    backgroundPosition: '50% 70%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.confidence-banner',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
