const entries = document.querySelectorAll('.entry');

entries.forEach(entry => {
  entry.addEventListener('mouseover', () => {
    entry.classList.add('active');
  })

  entry.addEventListener('mouseleave', () => {
    removeActiveClass();
  })
})

function removeActiveClass() {
  entries.forEach(entry => entry.classList.remove('active'));
}