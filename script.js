document.querySelectorAll('.box-btn').forEach(button => {
  const box = button.parentElement;

  button.addEventListener('click', () => {
    box.classList.toggle('open');
  });

  box.addEventListener('mouseleave', () => {
    if (box.classList.contains('open')) {
      box.classList.remove('open');
    }
  });
});
