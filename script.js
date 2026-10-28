const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const service = card.dataset.service;
    const formSelect = document.getElementById('formService');
    if (formSelect && service) formSelect.value = service;
    document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const searchBtn = document.getElementById('searchBtn');
const mainSelect = document.getElementById('mainSelect');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const formSelect = document.getElementById('formService');
    if (formSelect && mainSelect) formSelect.value = mainSelect.value;
    document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
  });
}

const form = document.getElementById('requestForm');
const overlay = document.getElementById('successOverlay');
const closeModal = document.getElementById('closeModal');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    overlay?.classList.add('show');
    form.reset();
  });
}
if (closeModal) closeModal.addEventListener('click', () => overlay?.classList.remove('show'));
if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('show');
  });
}

document.querySelectorAll('.lang-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  });
});
