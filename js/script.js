
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exitBtn')
    .addEventListener('click', showExitConfirm);

  document.getElementById('yesExit')
    .addEventListener('click', reverseStartGame);

  document.getElementById('noExit')
    .addEventListener('click', hideExitConfirm);
});


function startGame() {
  document.getElementById('screenContent').style.display  = 'none';
  document.getElementById('screen').style.display         = 'none';
  document.getElementById('overlay').style.opacity        = '1';
  document.getElementById('fullScreenView').style.display = 'flex';

  const zoomed   = document.getElementById('zoomedScreen');
  const menu     = document.getElementById('menu');
  const menuText = document.getElementById('menuText');

  zoomed.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'width') {
      menu.style.opacity     = '1';
      menuText.style.opacity = '1';
      zoomed.removeEventListener('transitionend', handler);
    }
  });

  setTimeout(() => zoomed.classList.add('zoomed'), 50);
}

function reverseStartGame() {
  hideExitConfirm();

  const zoomed         = document.getElementById('zoomedScreen');
  const overlay        = document.getElementById('overlay');
  const fullScreenView = document.getElementById('fullScreenView');
  const menu           = document.getElementById('menu');
  const menuText       = document.getElementById('menuText');
  const screenContent  = document.getElementById('screenContent');
  const screen         = document.getElementById('screen');

  menu.style.opacity     = '0';
  menuText.style.opacity = '0';
  overlay.style.opacity  = '0';
  zoomed.classList.remove('zoomed');

  zoomed.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'width') {
      fullScreenView.style.display    = 'none';
      screenContent.style.display     = 'block';
      screen.style.display            = 'block';
      zoomed.removeEventListener('transitionend', handler);
    }
  });
}


function navigate(page) {
  switch (page) {
    case 'play':
      window.location.href = 'selection.html';
      break;
    case 'choose':
      window.location.href = 'choose.html';
      break;
    default:
      console.warn('Unknown navigation target:', page);
  }
}


function showExitConfirm() {
  document.getElementById('exitConfirmOverlay').style.display = 'flex';
}

function hideExitConfirm() {
  document.getElementById('exitConfirmOverlay').style.display = 'none';
}
