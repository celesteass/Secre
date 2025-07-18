// js/page.js
// This wires up your menu buttons, plus uses
// reverseStartGame() (from script.js) on “YES”.

window.addEventListener('DOMContentLoaded', () => {
  // menu buttons
  document.querySelector('#menu button[onclick*="play"]').addEventListener('click', () => {
    window.location.href = 'selection.html';
  });
  document.querySelector('#menu button[onclick*="choose"]').addEventListener('click', () => {
    window.location.href = 'choose.html';
  });

  // exit overlay buttons
  document.getElementById('exitBtn').addEventListener('click', showExitConfirm);
  document.getElementById('noExit').addEventListener('click', hideExitConfirm);
  document.getElementById('yesExit').addEventListener('click', () => {
   window.location.href = 'index.html';
    hideExitConfirm();
    reverseStartGame(); 
  });
});
