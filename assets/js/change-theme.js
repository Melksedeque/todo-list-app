const page = document.querySelector('main.page');
const btnTheme = document.querySelectorAll('button.button-theme');

btnTheme.forEach((button) => {
  button.addEventListener('click', () => {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
    button.classList.toggle('button-light');
    button.classList.toggle('button-dark');
    btnTheme.forEach((btn) => {
      btn.style.display = btn.style.display === 'none' ? 'inline-block' : 'none';
    });
  });
});