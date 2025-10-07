// Efek muncul saat scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.box, .box-feedback').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Tombol scroll ke atas
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
