// ============================================
// 🚀 ANA JAVASCRIPT (Main)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- LOADING -----
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  }

  // ----- NAVBAR MENU -----
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
        <div class="star-rating" data-project="${proj.name.toLowerCase()}">
          <input type="radio" name="${proj.name.toLowerCase()}" value="5" id="${proj.name.toLowerCase()}5" /><label for="${proj.name.toLowerCase()}5">★</label>
          <input type="radio" name="${proj.name.toLowerCase()}" value="4" id="${proj.name.toLowerCase()}4" /><label for="${proj.name.toLowerCase()}4">★</label>
          <input type="radio" name="${proj.name.toLowerCase()}" value="3" id="${proj.name.toLowerCase()}3" /><label for="${proj.name.toLowerCase()}3">★</label>
          <input type="radio" name="${proj.name.toLowerCase()}" value="2" id="${proj.name.toLowerCase()}2" /><label for="${proj.name.toLowerCase()}2">★</label>
          <input type="radio" name="${proj.name.toLowerCase()}" value="1" id="${proj.name.toLowerCase()}1" /><label for="${proj.name.toLowerCase()}1">★</label>
          <span class="avg">⭐ 0.0 (0 oy)</span>
        </div>
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
          <div class="star-rating" data-project="${proj.name.toLowerCase()}">
            <input type="radio" name="${proj.name.toLowerCase()}" value="5" id="${proj.name.toLowerCase()}5" /><label for="${proj.name.toLowerCase()}5">★</label>
            <input type="radio" name="${proj.name.toLowerCase()}" value="4" id="${proj.name.toLowerCase()}4" /><label for="${proj.name.toLowerCase()}4">★</label>
            <input type="radio" name="${proj.name.toLowerCase()}" value="3" id="${proj.name.toLowerCase()}3" /><label for="${proj.name.toLowerCase()}3">★</label>
            <input type="radio" name="${proj.name.toLowerCase()}" value="2" id="${proj.name.toLowerCase()}2" /><label for="${proj.name.toLowerCase()}2">★</label>
            <input type="radio" name="${proj.name.toLowerCase()}" value="1" id="${proj.name.toLowerCase()}1" /><label for="${proj.name.toLowerCase()}1">★</label>
            <span class="avg">⭐ 0.0 (0 oy)</span>
          </div>
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

  // ============================================
  // 🐱 İMLEC TAKİP EDEN KEDI + KONUŞMA BALONU
  // ============================================

  (function() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.textContent = '🐱';
    document.body.appendChild(cursor);

    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    document.body.appendChild(bubble);

    let isCatActive = true;
    let selectedAnimal = localStorage.getItem('selectedAnimal') || '🐱';

    // Hayvan seçici
    const animalSelector = document.createElement('div');
    animalSelector.className = 'animal-selector';
    animalSelector.innerHTML = `
      <button data-animal="🐱">🐱</button>
      <button data-animal="🐶">🐶</button>
      <button data-animal="🐰">🐰</button>
      <button data-animal="🐹">🐹</button>
      <button data-animal="🐻‍❄️">🐻‍❄️</button>
      <button data-animal="🐮">🐮</button>
      <button data-animal="🦁">🦁</button>
    `;
    document.body.appendChild(animalSelector);

    // Hayvan seçme
    animalSelector.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedAnimal = btn.dataset.animal;
        cursor.textContent = selectedAnimal;
        animalSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        localStorage.setItem('selectedAnimal', selectedAnimal);
      });
    });

    // Kayıtlı hayvanı yükle
    const savedAnimal = localStorage.getItem('selectedAnimal');
    if (savedAnimal) {
      selectedAnimal = savedAnimal;
      cursor.textContent = selectedAnimal;
      animalSelector.querySelectorAll('button').forEach(b => {
        if (b.dataset.animal === savedAnimal) b.classList.add('active');
      });
    }

    // Kedi rehber butonu
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'cat-toggle';
    toggleContainer.innerHTML = `
      <button class="cat-toggle-btn" id="catToggleBtn">😺</button>
      <span class="cat-toggle-label">Kedi Rehber</span>
    `;
    document.body.appendChild(toggleContainer);

    const toggleBtn = document.getElementById('catToggleBtn');

    toggleBtn.addEventListener('click', () => {
      isCatActive = !isCatActive;
      toggleBtn.textContent = isCatActive ? '😺' : '😾';
      cursor.style.display = isCatActive ? 'block' : 'none';
      bubble.classList.remove('show');
      animalSelector.classList.toggle('show', isCatActive);
    });

    let messageTimeout = null;

    document.addEventListener('mousemove', (e) => {
      if (!isCatActive) return;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      bubble.style.left = e.clientX + 20 + 'px';
      bubble.style.top = e.clientY - 30 + 'px';

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        handleHover(target, e);
      }
    });

    function handleHover(el, e) {
      const card = el.closest('.project-card');
      if (card && isCatActive) {
        const name = card.querySelector('h3')?.textContent || 'Proje';
        const messages = {
          'WhiskerSearch': '🔎 Beyza\'nın favorisi! Göz atmak ister misin?',
          'Cat-Desktop': '💻 Masaüstünde kedi keyfi!',
          'En Uzun Kedi': '📏 Ne kadar uzayabilir acaba?',
          'CatAI': '🧠 Yapay zeka ile sohbet etmeye ne dersin?',
          'WhiskerTerminal': '📟 Komut satırı seviyorsan tam yerindesin!',
          'Kişiler': '👥 Kedilerle dolu bir rehber!',
          'Mail': '✉️ Kedi postası!',
          'Takvim': '🗓️ Kedili takvim!',
          'Mesajlar': '💬 Kedi mesajlaşması!'
        };
        const msg = messages[name] || '🐱 Bu projeye bir göz at!';
        showBubble(msg, e);
        cursor.textContent = '😸';
        return;
      }

      // SADECE kapatma butonları için uyarı
      if (el.closest('.close-btn') || el.closest('.window-buttons')) {
        showBubble('😾 Buraya tıklama!', e);
        cursor.textContent = '😾';
        return;
      }

      // Geri kalan her şeyde normal hayvan
      cursor.textContent = selectedAnimal;
      hideBubble();
    }

    function showBubble(msg, e) {
      if (!isCatActive) return;
      if (messageTimeout) clearTimeout(messageTimeout);
      bubble.textContent = msg;
      bubble.classList.add('show');
      messageTimeout = setTimeout(() => {
        hideBubble();
      }, 3000);
    }

    function hideBubble() {
      bubble.classList.remove('show');
      if (messageTimeout) {
        clearTimeout(messageTimeout);
        messageTimeout = null;
      }
    }

    // Yıldız oylama sistemi
    document.querySelectorAll('.star-rating').forEach(rating => {
      const projectId = rating.dataset.project;
      const avgDisplay = rating.querySelector('.avg');

      const saved = JSON.parse(localStorage.getItem('project_ratings') || '{}');
      if (saved[projectId]) {
        const avg = saved[projectId].avg || 0;
        if (avgDisplay) avgDisplay.textContent = `⭐ ${avg.toFixed(1)} (${saved[projectId].count} oy)`;
      }

      const stars = rating.querySelectorAll('input');
      stars.forEach(star => {
        star.addEventListener('change', function() {
          const val = parseInt(this.value);
          const ratings = JSON.parse(localStorage.getItem('project_ratings') || '{}');
          if (!ratings[projectId]) ratings[projectId] = { total: 0, count: 0, avg: 0 };
          ratings[projectId].total += val;
          ratings[projectId].count += 1;
          ratings[projectId].avg = ratings[projectId].total / ratings[projectId].count;
          localStorage.setItem('project_ratings', JSON.stringify(ratings));
          if (avgDisplay) avgDisplay.textContent = `⭐ ${ratings[projectId].avg.toFixed(1)} (${ratings[projectId].count} oy)`;
        });
      });
    });

    // Starfield
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    document.body.appendChild(starfield);

    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.width = (Math.random() * 3 + 1) + 'px';
      star.style.height = star.style.width;
      starfield.appendChild(star);
    }

    // Modal işlemleri
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.project-link')) return;

        const name = card.querySelector('h3')?.textContent || 'Proje';
        const emoji = card.querySelector('.emoji')?.textContent || '🐱';
        const desc = card.querySelector('p')?.textContent || '';

        modalBody.innerHTML = `
          <span class="modal-emoji">${emoji}</span>
          <h2>${name}</h2>
          <p class="modal-desc">${desc}</p>
          <div class="modal-img">${emoji}</div>
          <p style="color:var(--color-text-secondary); font-size:14px;">
            🖥️ Masaüstü önerilir.<br>
            ⭐ Projeyi oylamayı unutma!
          </p>
        `;

        modal.classList.add('active');
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          modal.classList.remove('active');
        }
      });
    }
  })();

});
