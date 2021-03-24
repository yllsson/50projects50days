const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// MY SOLUTION
toggle.addEventListener('click', () => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    toggle.innerText = 'Dark mode';
  } else {
    toggle.innerText = 'Light mode';
  }
  html.classList.toggle('dark');
});

// LESSON SOLUTION
// toggle.addEventListener('click', (e) => {
//   const html = document.querySelector('html');
//   if (html.classList.contains('dark')) {
//     html.classList.remove('dark');
//     e.target.innerText = 'Dark mode';
//   } else {
//     html.classList.add('dark');
//     e.target.innerText = 'Light mode';
//   }
// });

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  // NON MILITARY TIME
  // timeEl.innerHTML = `${hoursForClock}:${
  //   minutes < 10 ? `0${minutes}` : minutes
  // } ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

// I copied and kept the StackOverflow link Traversy used for this project for future reference https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
