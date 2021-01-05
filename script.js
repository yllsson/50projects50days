/* this bit of code allows me to simply add the name of the project into the array 
to generate a new entry on the homepage, 
and stop copy-pasting the same code over and over in index.html */

const projects = [
  'Expanding Cards',
  'Progress Steps',
  'Rotating Navigation',
  'Hidden Search Widget',
  'Blurry Loading',
  'Scroll Animation',
  'Split Landing Page',
  'Form Wave Animation',
  'Sound Board',
  'Dad Jokes',
  'Event KeyCodes',
  'FAQ Collapse'
];
const container = document.querySelector('.container');

projects.forEach((project) => {
  const entry = document.createElement('div');
  const link = document.createElement('a');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  entry.classList.add('entry');

  link.setAttribute(
    'href',
    `./Day ${projects.indexOf(project) + 1}_${project}/index.html`
  );

  h3.innerText = `Day ${projects.indexOf(project) + 1}: ${project}`;
  p.innerText = `Click to see preview`;

  container.appendChild(entry);
  entry.appendChild(link);
  link.appendChild(h3);
  entry.appendChild(p);
});

// this part adds a button-expanding animation to my entry list

const entries = document.querySelectorAll('.entry');

entries.forEach((entry) => {
  entry.addEventListener('mouseover', () => {
    entry.classList.add('active');
  });

  entry.addEventListener('mouseleave', () => {
    removeActiveClass();
  });
});

function removeActiveClass() {
  entries.forEach((entry) => entry.classList.remove('active'));
}
