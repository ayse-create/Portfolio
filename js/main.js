// ============================================
// 🚀 ANA JAVASCRIPT (Main)
// Tüm modülleri birleştirir ve başlatır.
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- LOADING EKRANI -----
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  }

  // ----- NAVBAR MENU (Mobil) -----
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ----- NAVBAR SCROLL -----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.style.background = 'rgba(var(--color-bg), 0.92)';
      } else {
        navbar.style.background = 'rgba(var(--color-bg), 0.8)';
      }
    });
  }

  // ----- SCROLL PROGRESS -----
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // ----- BACK TO TOP -----
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- FOOTER YEAR -----
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // ----- PROJE KARTLARI (Ana Sayfa) -----
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const projects = [
      { emoji: '🔎', name: 'WhiskerSearch', desc: 'Kedi temalı arama simülasyonu.', tags: ['Web', 'HTML', 'CSS', 'JS'], link: 'https://ayse-create.github.io/WhiskerSearch/' },
      { emoji: '💻', name: 'Cat-Desktop', desc: 'Mac tarzı kedi masaüstü.', tags: ['Web', 'HTML', 'CSS', 'JS'], link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop' },
      { emoji: '🐱', name: 'En Uzun Kedi', desc: 'Sonsuza kadar uzayan kedi.', tags: ['Web', 'HTML', 'CSS', 'JS'], link: 'https://ayse-create.github.io/WhiskerSearch/theLongestCat' },
    ];

    projects.forEach((proj, index) => {
      const card = document.createElement('div');
      card.className = `project-card fade-in delay-${index + 1}`;
      card.innerHTML = `
        <span class="emoji">${proj.emoji}</span>
        <h3>${proj.name}</h3>
        <p>${proj.desc}</p>
        <div class="tags">${proj.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <a href="${proj.link}" target="_blank" class="project-link">→ Canlı Demo</a>
      `;
      featuredGrid.appendChild(card);
    });
  }

  // ----- PROJE KARTLARI (Projects Sayfası) -----
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    const allProjects = [
      { emoji: '🔎', name: 'WhiskerSearch', desc: 'Kedi temalı arama simülasyonu.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'web', link: 'https://ayse-create.github.io/WhiskerSearch/' },
      { emoji: '💻', name: 'Cat-Desktop', desc: 'Mac tarzı kedi masaüstü.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'desktop', link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop' },
      { emoji: '🐱', name: 'En Uzun Kedi', desc: 'Sonsuza kadar uzayan kedi.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'web', link: 'https://ayse-create.github.io/WhiskerSearch/theLongestCat' },
      { emoji: '🧠', name: 'CatAI', desc: 'Yapay zeka sohbet asistanı.', tags: ['AI', 'JavaScript', 'Web'], category: 'ai', link: 'https://ayse-create.github.io/WhiskerSearch/cat-ai' },
      { emoji: '📟', name: 'WhiskerTerminal', desc: 'Terminal simülasyonu.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'web', link: 'https://ayse-create.github.io/WhiskerSearch/terminal' },
      { emoji: '👥', name: 'Kişiler', desc: 'Kedili kişi listesi.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'desktop', link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop/kisiler' },
      { emoji: '✉️', name: 'Mail', desc: 'Kedili mail uygulaması.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'desktop', link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop/mail' },
      { emoji: '🗓️', name: 'Takvim', desc: 'Kedili takvim uygulaması.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'desktop', link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop/takvim' },
      { emoji: '💬', name: 'Mesajlar', desc: 'Kedili mesajlaşma.', tags: ['Web', 'HTML', 'CSS', 'JS'], category: 'desktop', link: 'https://ayse-create.github.io/WhiskerSearch/Cat-Desktop/mesajlar' },
    ];

    function renderProjects(filter = 'all') {
      projectsGrid.innerHTML = '';
      const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
      filtered.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = `project-card fade-in delay-${(index % 4) + 1}`;
        card.innerHTML = `
          <span class="emoji">${proj.emoji}</span>
          <h3>${proj.name}</h3>
          <p>${proj.desc}</p>
          <div class="tags">${proj.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <a href="${proj.link}" target="_blank" class="project-link">→ Canlı Demo</a>
        `;
        projectsGrid.appendChild(card);
      });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });

    renderProjects('all');
  }

  // ----- İLETİŞİM FORMU -----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert(`🐱 Teşekkürler ${name}! Mesajın alındı. En kısa sürede döneceğim.`);
        contactForm.reset();
      } else {
        alert('Lütfen tüm alanları doldur.');
      }
    });
  }

});
