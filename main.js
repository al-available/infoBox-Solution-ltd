const menuClose = document.getElementById('menuClose');
const menuOpen = document.getElementById('menuOpen');
const aside = document.querySelector('aside'); // ✅ added

function toggleMenu() {
  if (menuOpen.style.display === 'none' || menuOpen.style.display === '') {
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
    aside.classList.add('active'); // ✅ open aside
  } else {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    aside.classList.remove('active'); // ✅ close aside
  }
}

menuClose.addEventListener('click', toggleMenu);
menuOpen.addEventListener('click', toggleMenu);