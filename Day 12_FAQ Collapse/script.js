// my solution

const buttons = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    faqs[idx].classList.toggle('active');
  });
});

// course solution

/*
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
*/
