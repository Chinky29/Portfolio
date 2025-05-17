const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  themeToggleButton.textContent = isLight ? '🌙' : '🌞';
});
