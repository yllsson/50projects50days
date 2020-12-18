// this bit of code allows me to add the name of the project into the array and stop copy-pasting the same code over and over on my HTML page

const projects = [
  'Expanding Cards', 
  'Progress Steps', 
  'Rotating Navigation', 
  'Hidden Search Widget', 
  'Blurry Loading', 
  'Scroll Animation', 
  'Split Landing Page',
  'Form Wave Animation',
  'Sound Board'
]
const container = document.querySelector('.container');

projects.forEach(project => {
  const entry = document.createElement('div');
  const link = document.createElement('a');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  entry.classList.add('entry');

  link.setAttribute('href', `./Day ${projects.indexOf(project)+1}_${project}/index.html`)

  h3.innerText = `Day ${projects.indexOf(project)+1}: ${project}`
  p.innerText = `Click to see preview`

  
  container.appendChild(entry);
  entry.appendChild(link);
  link.appendChild(h3);
  entry.appendChild(p)
})


// this part adds a button-expanding animation to my entry list

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

