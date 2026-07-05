// ============================================
// 🔍 PROJE ARAMA VE FİLTRELEME
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const projectCards = document.querySelectorAll('.project-card');

  if (searchInput && projectCards.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      projectCards.forEach(card => {
        const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
        const tags = card.querySelector('.tags')?.textContent?.toLowerCase() || '';

        const match = name.includes(query) || desc.includes(query) || tags.includes(query);
        card.style.display = match ? '' : 'none';
      });
    });
  }
});
