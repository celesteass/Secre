
window.addEventListener('DOMContentLoaded', () => {
  // 1) grab your overlay containers
  const aboutOv  = document.getElementById('aboutConfirmOverlay');
  const hobbyOv  = document.getElementById('hobbyConfirmOverlay');
  const gamesOv  = document.getElementById('gamesConfirmOverlay');
  const exitOv   = document.getElementById('exitConfirmOverlay');

  // 2) menu buttons → show their overlays
  document.getElementById('aboutBtn')
    .addEventListener('click', () => { aboutOv.style.display = 'flex'; });
  document.getElementById('hobbyBtn')
    .addEventListener('click', () => { hobbyOv.style.display = 'flex'; });
  document.getElementById('gamesBtn')
    .addEventListener('click', () => { gamesOv.style.display = 'flex'; });
  document.getElementById('exitBtn')
    .addEventListener('click', () => { exitOv.style.display = 'flex'; });

  // 3) RETURN TO MAIN MENU’s YES/NO
  document.getElementById('yesExit')
    .addEventListener('click', () => {
      window.location.href = 'page.html';
    });
  document.getElementById('noExit')
    .addEventListener('click', () => {
      exitOv.style.display = 'none';
    });

  // 4) any <button class="closeBtn"> inside .infoOverlay hides *its* overlay
  document.querySelectorAll('.infoOverlay .closeBtn')
    .forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();  // don’t bubble up and re‐open
        btn.closest('.infoOverlay').style.display = 'none';
      });
    });
});
