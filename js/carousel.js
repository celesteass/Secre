const imageURLs = [
  'img/newcs2.png',
  'img/newrivals.png',
  'img/newhsr.png',
  'img/newvalo.png',
  'img/newgbvsr.png'
];

function preloadAll(urls, done) {
  let loaded = 0;
  urls.forEach(src => {
    const img = new Image();
    img.onload  = () => { if (++loaded === urls.length) done(); };
    img.onerror = () => { if (++loaded === urls.length) done(); };
    img.src     = src;
  });
}


function initCarousel() {
  const track        = document.getElementById('carouselTrack');
  const CONTAINER_W  = 1240, CARD_W = 685, GAP = 86;
  const startX       = (CONTAINER_W - CARD_W) / 2;
  let cards          = Array.from(track.children);
  const realCount    = cards.length;

  const firstClone = cards[0].cloneNode(true);
  const lastClone  = cards[realCount - 1].cloneNode(true);
  firstClone.classList.add('clone');
  lastClone .classList.add('clone');
  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);
  cards = Array.from(track.children);

  let currentIndex = 1;
  track.style.transform  = `translateX(${startX - currentIndex*(CARD_W+GAP)}px)`;
  track.style.transition = 'none';
  track.offsetHeight; 
  track.style.transition = 'transform 0.6s ease-in-out';


  track.addEventListener('transitionend', () => {
    if (cards[currentIndex].classList.contains('clone')) {
      track.style.transition = 'none';
      currentIndex = (currentIndex === 0 ? realCount : 1);
      track.style.transform  = `translateX(${startX - currentIndex*(CARD_W+GAP)}px)`;
      track.offsetHeight;
      track.style.transition = 'transform 0.6s ease-in-out';
    }
  });


  function moveTo(idx) {
    currentIndex = idx;
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform  = `translateX(${startX - currentIndex*(CARD_W+GAP)}px)`;
  }

// Replace the existing track click event listener with this:
track.addEventListener('click', e => {
  const img = e.target.closest('.carousel-image');
  if (!img) return;
  
  const idx = cards.indexOf(img);
  
  // Only proceed if the clicked image is the current center one
  if (idx === currentIndex) {
    const href = img.getAttribute('data-href');
    if (href) {
      window.location.href = href;
    }
    return;
  }
  
  // Otherwise handle navigation as before
  if (idx === currentIndex - 1) moveTo(currentIndex - 1);
  else if (idx === currentIndex + 1) moveTo(currentIndex + 1);
});
}


document.addEventListener('DOMContentLoaded', () => {
  preloadAll(imageURLs, initCarousel);
});



