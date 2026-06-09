// Service panel tabs switching mechanism
function switchPanel(id, btn) {
  document.querySelectorAll('.svc-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

// Scroll reveal management intersection framework
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Navigation dynamic transformation layout shifts
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '1rem 4rem';
    nav.style.borderBottomColor = 'rgba(201,168,76,0.28)';
  } else {
    nav.style.padding = '1.5rem 4rem';
    nav.style.borderBottomColor = 'rgba(201,168,76,0.18)';
  }
});

// Structural initialization form execution control
function handleSubmit(event) {
  event.preventDefault();
  const btn = event.target.querySelector('.cform-btn');
  btn.textContent = 'Inquiry Registered — Private Advisory Initiated';
  btn.style.background = 'var(--text-secondary)';
  btn.style.color = 'var(--obsidian)';
  btn.disabled = true;
}
