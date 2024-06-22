window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop; //jarak dari posisi header terhadap topnya (default 0, karena nempel ke paling atas)

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    // document.getElementById('navbar-fixed').style.color = '#ff8400';
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
