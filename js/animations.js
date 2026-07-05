// ============================================
// 🎬 ANİMASYONLAR
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- TYPEWRITER -----
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = ['Kedi sever.', 'Frontend geliştirici.', 'Yaratıcı kod yazarı.', 'Hayalperest.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentWord = words[wordIndex];
      const speed = isDeleting ? 60 : 120;

      if (!isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeWriter, 1500);
          return;
        }
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWriter, 300);
          return;
        }
      }
      setTimeout(typeWriter, speed);
    }

    setTimeout(typeWriter, 500);
  }

  // ----- SAYAÇ ANİMASYONU -----
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, 25);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(el => observer.observe(el));
  }

});
