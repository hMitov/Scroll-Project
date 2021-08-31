const navBtn = document.querySelector('#nav-btn');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
navBtn.addEventListener('click', function() {
/*  linksContainer.classList.toggle('show-links');*/
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if(linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight+30}px`;
  }
  else{
    linksContainer.style.height = 0;
  }
});

const navbar = document.querySelector('.nav-center');

window.addEventListener('scroll', function() {
  const scroll = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scroll > navHeight) {
    navbar.classList.add('fixed-nav-center');
  }
  else {
    navbar.classList.remove('fixed-nav-center');
  }
});

const toTopBtn = document.querySelector('#up');

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
