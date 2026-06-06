function showSlide(id) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('visible'));
  document.getElementById('slide-' + id).classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}